import "./output.css";
import Course from "./Course";

export default function Term(props) {
  const courses = props.courses;
  console.log(
    "courses from term",
    courses,
    "yearnum",
    props.yearNum,
    "termNum",
    props.termNum
  );
  let shownCourses;
  if (Array.isArray(courses)) {
    shownCourses = courses
      .filter((x) => x !== null)
      .map((x, i) => (
        <Course
          key={`${x.name}-${props.termNum}-${i}`}
          courseName={x.name}
          hasLab={x.hasLab}
          hasRecitation={x.hasRecitation}
          creditHours={x.credits}
          PreRequisites={x.PreRequisites}
          addCourse={() =>
            props.handleAddCourse(x.name, x.credits, x.PreRequisites)
          }
        />
      ));
  } else {
    shownCourses = (
      <Course
        key={courses.name}
        courseName={courses.name}
        hasLab={courses.hasLab}
        hasRecitation={courses.hasRecitation}
        creditHours={courses.credits}
        preRequisites={courses.PreRequisites}
        addCourse={() =>
          props.handleAddCourse(
            courses.name,
            courses.credits,
            courses.PreRequisites
          )
        }
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
    <div className="flex flex-col justify-between w-1/2 h-full align-middle">
      <div className="flex flex-col justify-between align-middle">
        {shownCourses}
      </div>
      <h4 className="text-center">{sumOfHours} </h4>
    </div>
  );
}
