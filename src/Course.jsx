import "./output.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
export default function Course(props) {
  const [backgroundColor, setBackGroundColor] = useState("");

  // let currnetTerm =
  function changeColor() {
    let currentTerm = props.selectedTerm;
    console.log(currentTerm, props.selectedTerm);
    const termSplited = currentTerm.split("-");
    const yearSelected = termSplited[0];
    const termSelected = termSplited[1];
    setBackGroundColor(colors[yearSelected][termSelected]);
    console.log(colors[yearSelected][termSelected]);
    props.addCourse();
  }

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
  // function findCurrentTerm() {
  //   console.log("enternd find");
  //   const currentTerms = Object.keys(props.selectedCourses);
  //   for (let i = 0; i < currentTerms.length; i++) {
  //     let currentTerm = currentTerms[i];

  //     for (let i = 0; i < currentTerm.length; i++) {
  //       if (currentTerm[i]["name"] === props.courseName) {
  //         console.log(currentTerm[i]["name"]);
  //         return currentTerm;
  //       }
  //     }
  //   }
  // }

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
