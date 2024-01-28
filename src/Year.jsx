import './output.css'
import Term from "./Term"


export default function Year(props){
 
    let terms = props.plannedTerms
    const shownTerms = terms.map( (x,i) => <Term key={i} courses = {x}/>)

    console.log(props.yearNum)
    return(
        <div>
            <h1>{isNaN(props.yearNum) ? "summer"    : "Year " + props.yearNum}</h1>
            <div className='flex justify-center'>
                {/* <Term /> */}
                {shownTerms}
            </div>
        </div>

    )



}