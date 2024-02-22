import "./output.css";
import { useState, useEffect, useRef, useContext } from "react";
import { SelectedCoursesContext } from "../contexts/CoursesContext";
import Year from "./Year";
import swePlanData from "../plans/SWE-plan.json";
import ColorPalette from "./ColorPalette";
import Side from "./Side";
import PlanPDFGenerator from "./PlanPDFGenerator";
import { PDFViewer } from "@react-pdf/renderer";

let InitializeCoursesObject = {};
for (let year = 0; year < 5; year++) {
  for (let term = 0; term < 3; term++) {
    const termKey = `${year}-${term}`;
    InitializeCoursesObject[termKey] = [];
  }
}

export default function Plan(props) {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem(`${props.major}-selectedCourses`)) ||
      InitializeCoursesObject
  );

  useEffect(() => {
    console.log("updated selectedCourses", selectedCourses);
  }, [selectedCourses]);

  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      setErrorMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  let planData = props.plan;
  console.log(planData);
  const summerTermIndex = 6;
  let summerYear = (
    <Year
      key={"summer"}
      yearNum={"summer"}
      handleAddCourse={addCourse}
      plannedTerms={planData[summerTermIndex]}
    />
  );
  let dataNoSummer = planData.toSpliced(summerTermIndex, 1);
  let years = [];
  let j = 1;
  for (let i = 0; i < dataNoSummer.length; i = i + 2) {
    years.push(
      <Year
        key={i}
        yearNum={j}
        handleAddCourse={addCourse}
        plannedTerms={[dataNoSummer[i], dataNoSummer[i + 1]]}
      />
    );
    if (i === summerTermIndex - 2) years.push(summerYear);
    j++;
  }
  function findAllPostRequisites(courseName) {
    return findaAllPostRequisitesRecursive(courseName, []);
  }

  function findaAllPostRequisitesRecursive(courseName, postRequisites) {
    let currentCourse = findCourse(courseName);
    if (
      currentCourse["postRequisites"] === null ||
      currentCourse["postRequisites"].length === 0
    ) {
      return postRequisites;
    }
    for (let i = 0; i < currentCourse["postRequisites"].length; i++) {
      postRequisites.push(currentCourse["postRequisites"][i]);
      findaAllPostRequisitesRecursive(
        currentCourse["postRequisites"][i],
        postRequisites
      );
    }
    return postRequisites;
  }

  function findCourse(courseName) {
    for (let i = 0; i < planData.length; i++) {
      let currentTerm = planData[i];
      for (let j = 0; j < currentTerm.length; j++) {
        if (courseName === currentTerm[j].name) {
          return currentTerm[j];
        }
      }
    }
  }

  function addCourse(courseName, credits, preRequisite) {
    console.log("post Reqs", findAllPostRequisites(courseName));
    if (!selectedTerm) {
      return;
    }

    // if the selected term is clear
    if (selectedTerm === "clear") {
      clearCourseAndPostReqsAll(courseName);
      return;
    }

    // check for preRequisi
    if (preRequisite) {
      let unmeetedPreReqs = findUnmeetedPreReqs(preRequisite);
      if (unmeetedPreReqs.length > 0) {
        console.log("there is preReqfor this course", unmeetedPreReqs);
        updateErrorMessage(courseName, unmeetedPreReqs);
        return;
      }
    }

    // if the course was selected in another term then remove it. and remove all PostReqs that was before the selected Term
    clearCourseAndPostReqsAll(courseName);

    // add the course
    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      if (!updated[selectedTerm].some((course) => course.name === courseName)) {
        updated[selectedTerm].push({ name: courseName, credits: credits });
      }
      // updated[selectedTerm].push({ name: courseName, credits: credits });

      return updated;
    });
  }

  // add Course Functions

  function clearCourseAndPostReqsAll(courseName) {
    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      let postReqs = findAllPostRequisites(courseName);
      postReqs.push(courseName);
      console.log(postReqs);
      for (let year = 0; year < 5; year++) {
        for (let term = 0; term < 3; term++) {
          let currentTerm = updated[`${year}-${term}`];
          for (let i = currentTerm.length - 1; i >= 0; i--) {
            if (postReqs.includes(currentTerm[i]["name"])) {
              console.log("found deleted", currentTerm[i]["name"]);
              currentTerm.splice(i, 1);
              updated[`${year}-${term}`] = currentTerm;
            }
          }
        }
      }
      return { ...updated };
    });
  }
  function findUnmeetedPreReqs(preReqs) {
    let preReqNames = preReqs;

    let currentTerm = parseInt(selectedTerm.split("-")[1]);
    let currentYear = parseInt(selectedTerm.split("-")[0]);

    for (let i = 0; i < preReqNames.length; i++) {
      for (let year = 0; year <= currentYear; year++) {
        for (let term = 0; term < 3; term++) {
          if (year === currentYear && term === currentTerm) break;
          let currentTermCourses = selectedCourses[`${year}-${term}`];

          for (let i = 0; i < currentTermCourses.length; i++) {
            let currentsSelectedCourseName = currentTermCourses[i]["name"];
            if (preReqNames.includes(currentsSelectedCourseName)) {
              let indexOfCourse = preReqNames.indexOf(
                currentsSelectedCourseName
              );
              preReqNames.splice(indexOfCourse, 1);
            }
          }
        }
      }
    }
    return preReqNames;
  }

  function changeSelectedTerm(term) {
    setSelectedTerm(term);
  }

  function updateErrorMessage(courseName, unmeetedPreReq) {
    setErrorMessage(
      courseName +
        " has unmeeted prerequisits for this which are : " +
        unmeetedPreReq.join(", ")
    );
    setShowMessage(true);
  }

  useEffect(() => {
    localStorage.setItem(
      `${props.major}-selectedCourses`,
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses]);

  return (
    <div className="">
      <SelectedCoursesContext.Provider value={selectedCourses}>
        <main id="plan-container">
          <div className="flex justify-center mt-8">
            <div className="flex max-md:flex-col">
              {years}
              <ColorPalette
                selectedCourses={selectedCourses}
                handleChange={changeSelectedTerm}
                currentTerm={selectedTerm}
              />
            </div>
          </div>

          {showMessage && (
            <h3 className="border-2 border-red-500 bg-red-200 place-self-end mt-8 text-center">
              {errorMessage}
            </h3>
          )}
        </main>
        {/* <PDFViewer> */}
        {/* <PlanPDFGenerator selectedCourses={selectedCourses} /> */}
        {/* </PDFViewer> */}
        <Side />
      </SelectedCoursesContext.Provider>
    </div>
  );
}
