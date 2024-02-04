import "./output.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
export default function Course(props) {
  const [backgroundColor, setBackGroundColor] = useState("");
  const [courseTerm, setCurrentTerm] = useState("50-50");
  // let currnetTerm =
  function changeColor() {
    let selectedTerm = props.selectedTerm
    if(selectedTerm){
      
      // console.log(selectedTerm, props.selectedTerm);
  
      const termSplited = selectedTerm.split("-");
      const yearSelected = termSplited[0];
      const termSelected = termSplited[1];
  
      setBackGroundColor(colors[yearSelected][termSelected]);
      // console.log(colors[yearSelected][termSelected]);
      props.addCourse(props.courseName, props.creditHours, courseTerm, props.Prerequisites);
      setCurrentTerm(selectedTerm);
    }

  }
  // console.log("course" , props.courseName , props.Prerequisites)
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

  return (
    <button
      className={`border-2 px-4 py-2 rounded-lg w-28 m-2  bg-${backgroundColor}`}
      onClick={changeColor}
    >
      <h3>{props.courseName}</h3>
      <div className="flex justify-between items-center ">
        <h3>{props.creditHours}</h3>
        {props.hasLab && <FontAwesomeIcon icon={faComputer} />}
        {props.hasRecitation && <FontAwesomeIcon icon={faPen} />}
      </div>
    </button>
  );
}
