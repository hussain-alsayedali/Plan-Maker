import './output.css'
import Course from "./Course"

export default function Term(props){


    const courses = props.courses
    let shownCourses;
    if(Array.isArray(courses)){
        shownCourses = courses.map((x,i) =><Course key ={x.name} courseName = {x.name} hasLab = {x.hasLab} hasRecitation ={x.hasRecaitaiton}  creditHours = {x.credits}/>)
    }
    else{
        shownCourses = <Course key ={courses.name} courseName = {courses.name} hasLab = {courses.hasLab} hasRecitation ={courses.hasRecaitaiton}  creditHours = {courses.credits}  />
    }
   

    return (
        <div className=''>
            {/* <Course courseName = "moe" creditHours = {3} hasLab = {true} hasRecitation = {true} /> */}
            {shownCourses}
            
        </div>
    )
}