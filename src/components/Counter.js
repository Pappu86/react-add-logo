import { Form } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Counter = (props) => {
    console.log("props: ", props);

    const fieldName = props.fieldName;
    // const incrementCounter = () => {
    //     console.log("Increment");
    //     setCounter(counter + 1)
    // };
    let decrementCounter = () => {
        console.log("Increment");
    };

    return (
        <div>
            <span className="pull-right"><button className="btn" onClick={props.onClick}><FaPlus /></button></span>
            <span className="pull-right"><Form.Control type="text" name={fieldName} id={"counter_" + fieldName} placeholder="0" defaultValue={props.counter} /></span>
            <span className="pull-right"><button className="btn" onClick={decrementCounter}><FaMinus /></button></span>
        </div>
    )
}

export default Counter
