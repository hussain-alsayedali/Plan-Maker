import './output.css'
import Term from "./Term"


export default function Year(props){
 
    // let terms = props.plannedTerms.map( x => {<Term/>})

    return(
        <div>
            <h1>Year</h1>
            <div className='flex justify-center'>
                <Term />
                <Term />
            </div>
        </div>

    )



}