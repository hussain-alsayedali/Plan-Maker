import './output.css'
import Course from "./Course"

export default function Term(){



    return (
        <div className=''>
            <Course courseName = "moe" creditHours = {3} hasLab = {true} hasRecitation = {true} />
            <Course />
            <Course />
            <Course />
        </div>
    )
}