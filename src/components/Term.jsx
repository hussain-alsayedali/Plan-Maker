import "./output.css";
import Course from "./Course";

export default function Term(props) {
  const courses = props.courses;
  let shownCourses;
  if (Array.isArray(courses)) {
    shownCourses = courses.map((x, i) => (
      <Course
        key={`${x.name}-${props.termNum}-${i}`}
        courseName={x.name}
        hasLab={x.hasLab}
        hasRecitation={x.hasRecaitaiton}
        creditHours={x.credits}
        Prerequisites={x.Prerequisites}
        addCourse={() =>
          props.handleAddCourse(x.name, x.credits, x.Prerequisites)
        }
        // selectedCourses={props.selectedCourses}
        selectedTerm={props.selectedTerm}
        handleErrorMessage={props.handleErrorMessage}
      />
    ));
  } else {
    shownCourses = (
      <Course
        key={courses.name}
        courseName={courses.name}
        hasLab={courses.hasLab}
        hasRecitation={courses.hasRecaitaiton}
        creditHours={courses.credits}
        Prerequisites={courses.Prerequisites}
        addCourse={() =>
          props.handleAddCourse(
            courses.name,
            courses.credits,
            courses.Prerequisites
          )
        }
        // selectedCourses={props.selectedCourses}
        selectedTerm={props.selectedTerm}
        handleErrorMessage={props.handleErrorMessage}
      />
    );
  }
  let sumOfHours = 0;
  if (Array.isArray(courses)) {
    for (let i = 0; i < courses.length; i++) {
      sumOfHours += parseInt(courses[i].credits);
    }
  }

  return (
    <div className="flex flex-col justify-between w-32 h-full">
      <div>{shownCourses}</div>
      <h4 className="text-center">{sumOfHours} </h4>
    </div>
  );
}
