import "./output.css";
import Year from "./Year";
import swePlanData from "./swePlanNoClass.json"
export default function Plan() {


  let planData = swePlanData 
  const summerTermIndex = 6

  let summerYear = <Year plannedTerms = {planData[summerTermIndex]} />

  let dataNoSummer = planData.toSpliced(summerTermIndex, 1)
  console.log("data no summ")
  console.log(dataNoSummer)
  let years = []

  for(let i = 0 ; i< dataNoSummer.length; i = i +2){
    console.log(i , planData.length)
    years.push(<Year plannedTerms = {[planData[i] , planData[i+1]]} />)
    if(i === summerTermIndex)
      years.push(summerYear)
  }
  console.log(years)
  return (
    <div className="flex">
        {years}
        
    </div>
  );
}
