import "./output.css";
import { useState, useEffect } from "react";
import Year from "./Year";
import swePlanData from "./swePlanNoClass.json";
import ColorPalette from "./ColorPalette";
export default function Plan() {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState({});

  // making the plan
  let planData = swePlanData;
  const summerTermIndex = 6;
  let summerYear = (
    <Year key={"summer"} plannedTerms={planData[summerTermIndex]} />
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
      />
    );
    if (i === summerTermIndex - 2) years.push(summerYear);
    j++;
  }

  useEffect(() => {
    setSelectedCourses((prevSelectedCourses) => {
      let updatedSelectedCourses = { ...prevSelectedCourses };
      for (let year = 0; year < 5; year++) {
        for (let term = 0; term < 3; term++) {
          const termKey = `${year}-${term}`;
          updatedSelectedCourses[termKey] = [];
        }
      }
      return updatedSelectedCourses;
    });
  }, []);

  function addCourse(courseName, credits, selectedTerm) {
    if (!selectedTerm) {
      return;
    }
    console.log("clicked add course " + courseName);
    setSelectedCourses((prevCourses) => {
      let updated = { ...prevCourses };
      // if (!updated[selectedTerm]) {
      //   updated[selectedTerm] = []; // Initialize the array if it doesn't exist
      // }
      if (!updated[selectedTerm].some((course) => course.name === courseName)) {
        updated[selectedTerm].push({ name: courseName, credits: credits });
      } else {
        console.log("course already added");
      }
      return updated;
    });
    // console.log("added Course");
    // console.log(selectedCourses);
  }

  useEffect(() => {
    console.log("updated selectedCourses", selectedCourses);
  }, [selectedCourses]);

  function changeSelectedTerm(term) {
    console.log("clicked change term");
    setSelectedTerm(term);
  }

  return (
    <main className="">
      <div className="flex">{years}</div>
      <ColorPalette
        handleChange={changeSelectedTerm}
        currentTerm={selectedTerm}
      />
    </main>
  );
}
