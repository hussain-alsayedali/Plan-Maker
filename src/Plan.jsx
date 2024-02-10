import "./output.css";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import Year from "./Year";
import swePlanData from "./swePlanNoClass.json";
import ColorPalette from "./ColorPalette";

let InitializeCoursesObject = {};
for (let year = 0; year < 5; year++) {
  for (let term = 0; term < 3; term++) {
    const termKey = `${year}-${term}`;
    InitializeCoursesObject[termKey] = [];
  }
}

export default function Plan() {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("selectedCourses")) ||
      InitializeCoursesObject
  );

  useEffect(() => {
    console.log("updated selectedCourses", selectedCourses);
  }, [selectedCourses]);

  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  let planData = swePlanData;
  const summerTermIndex = 6;
  let summerYear = (
    <Year
      key={"summer"}
      yearNum={"summer"}
      handleAddCourse={addCourse}
      plannedTerms={planData[summerTermIndex]}
      selectedCourses={selectedCourses}
      selectedTerm={selectedTerm}
      handleErrorMessage={updateErrorMessage}
    />
  );
  let dataNoSummer = planData.toSpliced(summerTermIndex, 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      setErrorMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  let years = [];
  let j = 1;
  for (let i = 0; i < dataNoSummer.length; i = i + 2) {
    years.push(
      <Year
        key={i}
        yearNum={j}
        handleAddCourse={addCourse}
        plannedTerms={[dataNoSummer[i], dataNoSummer[i + 1]]}
        selectedTerm={selectedTerm}
        selectedCourses={selectedCourses}
        handleErrorMessage={updateErrorMessage}
      />
    );
    if (i === summerTermIndex - 2) years.push(summerYear);
    j++;
  }

  function addCourse(courseName, credits, preRequisite) {
    console.log("clicked seletc", selectedTerm);
    // if no term is selected then exit the function
    if (!selectedTerm) {
      return;
    }

    // check for preRequisit

    if (preRequisite) {
      let preReqNames = [];
      // console.log("preReq", preRequisite);
      for (let i = 0; i < preRequisite.length; i++) {
        preReqNames.push(preRequisite[i]["name"]);
      }
      // console.log(preReqNames);

      let currentTerm = parseInt(selectedTerm.split("-")[1]);
      let currentYear = parseInt(selectedTerm.split("-")[0]);

      console.log("current term / year", currentTerm, currentYear);
      for (let i = 0; i < preReqNames.length; i++) {
        // let currentCourse = preReqNames[i]
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

      const hasPreReq = preReqNames.length > 0;
      if (hasPreReq) {
        console.log("there is preReqfor this course", preReqNames);
        updateErrorMessage(courseName, preReqNames);
        return;
      }
    }

    // if the course was selected in another term then remove it.

    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      let updatedKeys = Object.keys(updated);

      for (let i = 0; i < updatedKeys.length; i++) {
        let prevTermList = updated[updatedKeys[i]];
        for (let j = 0; j < prevTermList.length; j++) {
          if (prevTermList[j]["name"] === courseName) {
            prevTermList.splice(j, 1);
            break;
          }
        }
        updated[updatedKeys[i]] = prevTermList;
      }
      return updated;
    });

    // console.log("clicked add course " + courseName);

    // add the course
    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      // if (!updated[selectedTerm]) {
      //   updated[selectedTerm] = []; // Initialize the array if it doesn't exist
      // }
      if (!updated[selectedTerm].some((course) => course.name === courseName)) {
        updated[selectedTerm].push({ name: courseName, credits: credits });
      }
      return updated;
    });
  }

  function changeSelectedTerm(term) {
    // console.log("clicked change term");
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
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  return (
    <main id="plan-container" ref={planRef} className="">
      <div className="flex justify-center mt-8">
        <div className="flex">
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
  );
}
