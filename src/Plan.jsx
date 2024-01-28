import "./output.css";
import Year from "./Year";
import planData from "./swePlanNoClass.json"
export default function Plan() {

  console.log(planData[0][0])
  return (
    <div className="flex">
      <Year />
      <Year />
      <Year />
      <Year />
    </div>
  );
}
