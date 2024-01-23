import './output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
export default function Course(){



    return (
        <div className='border-2 px-8 py-4 rounded-lg'>
            <h3>Math 101</h3>
            <div className="flex justify-between items-center ">
                <h3>3</h3>
                <FontAwesomeIcon icon={faComputer} />
            </div>
        </div>
    )
}