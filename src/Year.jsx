import "./output.css";
import Term from "./Term";

export default function Year(props) {
  let terms = props.plannedTerms;
  const shownTerms = terms.map((x, i) => (
    <Term
      key={i}
      termNum={i % 3}
      courses={x}
      yearNum={props.yearNum}
      handleAddCourse={props.handleAddCourse}
      selectedTerm={props.selectedTerm}
      selectedCourses={props.selectedCourses}
      handleErrorMessage = {props.handleErrorMessage}
    />
  ));

  return (
    <div className=" border border-black rounded mr-2">
      <h2 className="text-center">{isNaN(props.yearNum) ? "summer" : "Year " + props.yearNum}</h2>
      <div className="flex justify-center ">
        {/* <Term /> */}
        {shownTerms}
      </div>
    </div>
  );
}
