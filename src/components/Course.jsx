import "./output.css";
import { useContext, useState } from "react";
import { SelectedCoursesContext } from "../contexts/CoursesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const colors = {
  0: ["red-100", "zinc-100", "yellow-100"],
  1: ["orange-200", "teal-200", "cyan-200"],
  2: ["rose-300", "pink-300", "fuchsia-300"],
  3: ["violet-400", "emerald-400", "stone-400"],
  4: ["indigo-500", "sky-500", "lime-500"],
};

export default function Course(props) {
  let courseBackgroundColor = "";
  let courses = useContext(SelectedCoursesContext);

  function findCurrentTerm() {
    let coursesKeys = Object.keys(courses);

    for (let i = 0; i < coursesKeys.length; i++) {
      let currentTermCourses = courses[coursesKeys[i]];
      for (let j = 0; j < currentTermCourses.length; j++) {
        let currentCourse = currentTermCourses[j];

        if (currentCourse.name === props.courseName) {
          return coursesKeys[i];
        }
      }
    }
    return null;
  }
  function findColorFromTerm() {
    let term = findCurrentTerm();
    if (!term) return;
    const termSplited = term.split("-");
    const yearSelected = termSplited[0];
    const termSelected = termSplited[1];
    courseBackgroundColor = colors[yearSelected][termSelected];
  }
  findColorFromTerm();

  function changeColorNew() {
    console.log("preReq from course", props);
    props.addCourse();
    findColorFromTerm();
  }

  return (
    <button
      className={`border-2 px-2 py-2 rounded-lg w-24 m-1  bg-${courseBackgroundColor} hover:bg-slate-300 duration-300`}
      onClick={changeColorNew}
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
