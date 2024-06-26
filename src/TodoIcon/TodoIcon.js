import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './check.svg'


function TodoIcon({type}) {
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >
             <CheckSVG />
        </span>
    )
    
}

export { TodoIcon };