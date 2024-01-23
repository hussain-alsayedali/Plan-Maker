import './output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
export default function Course(props){

    return (
        <div className='border-2 px-8 py-4 rounded-lg w-36'>
            <h3>{props.courseName}</h3>
            <div className="flex justify-between items-center ">
                <h3>{props.creditHours}</h3>
                {props.hasLab &&  <FontAwesomeIcon icon={faComputer} />}
                {props.hasRecitation &&<FontAwesomeIcon icon={faPen} />}
            </div>
        </div>
    )
}