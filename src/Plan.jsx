import "./output.css";
import Year from "./Year";
import swePlanData from "./swePlanNoClass.json"
export default function Plan() {


  let planData = swePlanData 
  const summerTermIndex = 6

  let summerYear = <Year key = {"summer"} plannedTerms = {planData[summerTermIndex]} />

  let dataNoSummer = planData.toSpliced(summerTermIndex, 1)
  

  let years = []

  for(let i = 0 ; i< dataNoSummer.length; i = i +2){

    
    years.push(<Year key = {i} plannedTerms = {[dataNoSummer[i], dataNoSummer[i+1] ]} />)
    if(i === summerTermIndex -2)
      years.push(summerYear)
  }
  
  return (
    <div className="flex">
        {years}
        
    </div>
  );
}
