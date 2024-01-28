import './output.css'
import Term from "./Term"


export default function Year(props){
 
    let terms = props.plannedTerms
    const shownTerms = terms.map( (x,i) => <Term key={i} courses = {x}/>)

    return(
        <div>
            <h1>Year</h1>
            <div className='flex justify-center'>
                {/* <Term /> */}
                {shownTerms}
            </div>
        </div>

    )



}