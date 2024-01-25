import "./output.css"
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ColorPalette() {

    const colors = {
        0 : ["red-400", "zinc-400", "yellow-400" ],
        1 : ["orange-600", "teal-600","cyan-600" ],
        2 : ["rose-300" , "pink-400" , "fuchia-500"],
        3 : ["violet-200" , "teal-200", "stone-200" ],
        4 : [],
    }
    return(
        <div className=" ">
            <h3>Select <FontAwesomeIcon icon={faPalette}/></h3>
            
        </div>
    )
}