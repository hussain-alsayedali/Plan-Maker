import "./output.css";
import { useState, useEffect } from "react";
import Year from "./Year";
import swePlanData from "./swePlanNoClass.json";
import ColorPalette from "./ColorPalette";
export default function Plan() {
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
        plannedTerms={[dataNoSummer[i], dataNoSummer[i + 1]]}
      />
    );
    if (i === summerTermIndex - 2) years.push(summerYear);
    j++;
  }

  const [selectedTerm, setSelectedTerm] = useState(0);
  const [selectedCourses , setSelectedCourses] = useState({})

  useEffect(() => {
    setSelectedCourses((prevSelectedCourses) => {
      let updatedSelectedCourses = { ...prevSelectedCourses };
      for (let year = 0; year < 5; year++) {
        for (let term = 0; term < 3; term++) {
          updatedSelectedCourses[`${year}-${term}`] = [];
        }
      }
      return updatedSelectedCourses;
    });
  }, []);

  console.log(selectedCourses)
  function changeSelectedTerm(term) {
    console.log("clicked");
    setSelectedTerm(term);
    console.log(term);
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
