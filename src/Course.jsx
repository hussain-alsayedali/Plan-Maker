import "./output.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const opacity = 100;
const colors = {
  0: ["red-", "zinc-", "yellow-"],
  1: ["orange-", "teal-", "cyan-"],
  2: ["rose-", "pink-", "fuchsia-"],
  3: ["violet-", "emerald-", "stone-"],
  4: ["indigo-", "sky-", "lime-"],
};
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    colors[i][j] = `${colors[i][j]}${opacity * (i + 1)}`;
  }
}

export default function Course(props) {
  const [backgroundColor, setBackGroundColor] = useState("");
  const [courseTerm, setCurrentTerm] = useState("50-50");
  let courseBackgroundColor =""
  // let currnetTerm =

  function findCurrentTerm(){
    let courses = props.selectedCourses
    let coursesKeys = Object.keys(props.selectedCourses)
    
    for(let i = 0 ; i < coursesKeys.length ; i++){

      let currentTermCourses = courses[coursesKeys[i]]
      for(let j = 0 ; j < currentTermCourses.length   ; j++){

        let currentCourse = currentTermCourses[j]
        
        if(currentCourse.name === props.courseName){
          console.log(props.courseName , coursesKeys[i])
          return coursesKeys[i]
        }
      }
    }
    return null
  }
  function findColorFromTerm(){
    let term = findCurrentTerm()
    console.log("term" , term)
    if(!term) return
    const termSplited = term.split("-");
    const yearSelected = termSplited[0];
    const termSelected = termSplited[1];
    courseBackgroundColor = colors[yearSelected][termSelected]
    console.log(courseBackgroundColor)

  }
  findColorFromTerm()

  function changeColor() {
    let selectedTerm = props.selectedTerm;
    if (selectedTerm) {
      let preReqNames = [];
      let preRequisite = props.Prerequisites;
      let selectedCourses = props.selectedCourses;
      if (preRequisite) {
        preReqNames = []
        // console.log("preReq", preRequisite);
        for (let i = 0; i < preRequisite.length; i++) {
          preReqNames.push(preRequisite[i]["name"]);
        }
        // console.log(preReqNames);

        let currentTerm = parseInt(selectedTerm.split("-")[1]);
        let currentYear = parseInt(selectedTerm.split("-")[0]);

        // console.log("current term / year", currentTerm, currentYear);
        for (let i = 0; i < preReqNames.length; i++) {
          // let currentCourse = preReqNames[i]
          for (let year = 0; year <= currentYear; year++) {
            for (let term = 0; term < 3; term++) {
              if (year === currentYear && term === currentTerm + 1) break;
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
      }
      const hasPreReq = preReqNames.length > 0;
      if (hasPreReq) {
        console.log("there is preReqfor this course", preReqNames);
        props.handleErrorMessage(preReqNames, props.courseName)
        return;
      }

      // console.log(selectedTerm, props.selectedTerm);

      const termSplited = selectedTerm.split("-");
      const yearSelected = termSplited[0];
      const termSelected = termSplited[1];

      setBackGroundColor(colors[yearSelected][termSelected]);
      // console.log(colors[yearSelected][termSelected]);
      props.addCourse(
        props.courseName,
        props.creditHours,
        courseTerm,
        hasPreReq
      );
      setCurrentTerm(selectedTerm);
    }
  }
  // console.log("course" , props.courseName , props.Prerequisites)


  return (
    <button
      className={`border-2 px-4 py-2 rounded-lg w-28 m-1  bg-${courseBackgroundColor}`}
      onClick={changeColor}
    >
      <h3>{props.courseName}</h3>
      <div className="flex justify-between items-center">
        <h3>{props.creditHours}</h3>
        {props.hasLab && <FontAwesomeIcon icon={faComputer} />}
        {props.hasRecitation && <FontAwesomeIcon icon={faPen} />}
      </div>
    </button>
  );
}
