import "./output.css";
import { useState, useEffect } from "react";
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
    InitializeCoursesObject
  );
  // useEffect(() => {
  //   setSelectedCourses(), [];
  // });

  // console.log("selected courses : ", selectedCourses);
  // making the plan
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
        selectedTerm={selectedTerm}
        selectedCourses={selectedCourses}
      />
    );
    if (i === summerTermIndex - 2) years.push(summerYear);
    j++;
  }

  function addCourse(courseName, credits, prevTerm, preReq) {
    console.log(selectedTerm);
    // if no term is selected then exit the function
    if (!selectedTerm) {
      return;
    }
    console.log("preReq",preReq)




    // if the course was selected in another term then remove it and add it to current term
    if (prevTerm !== "50-50") {
      setSelectedCourses((prevCourses) => {
        let updated = { ...prevCourses };
        let prevTermList = updated[prevTerm];
        for (let i = 0; i < prevTermList.length; i++) {
          if (prevTermList[i]["name"] === courseName) {
            prevTermList.splice(i, 1);
            break;
          }
        }
        updated[prevTerm] = prevTermList;

        return updated;
      });
    }
    // console.log("clicked add course " + courseName);
    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      // if (!updated[selectedTerm]) {
      //   updated[selectedTerm] = []; // Initialize the array if it doesn't exist
      // }
      if (!updated[selectedTerm].some((course) => course.name === courseName)) {
        updated[selectedTerm].push({ name: courseName, credits: credits });
      } else {
        // console.log("course already added");
      }
      return updated;
    });
  }

  useEffect(() => {
    console.log("updated selectedCourses", selectedCourses);
  }, [selectedCourses]);

  function changeSelectedTerm(term) {
    // console.log("clicked change term");
    setSelectedTerm(term);
  }

  return (
    <main className="">
      <div className="flex">{years}</div>
      <ColorPalette
        selectedCourses={selectedCourses}
        handleChange={changeSelectedTerm}
        currentTerm={selectedTerm}
      />
    </main>
  );
}
