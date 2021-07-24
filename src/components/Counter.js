import { Form } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Counter = (props) => {
    const fieldName = props.fieldName;

    const handleCounterChange = (e) => {
        // Here, we invoke the callback with the new value
        props.onChange(e.target.value);
    };

    const handleIncDecCounter = (e) => {
        let counterType = e.currentTarget.dataset.countertype;
        let currentValue = document.getElementById('counter_' + fieldName).value;

        if (counterType === 'inc') {
            currentValue = currentValue * 1 + 1;
        }

        if (counterType === 'dec') {
            currentValue = currentValue * 1 - 1;

            if (currentValue <= 1) {
                currentValue = 0;
            }
        }

        props.onClick({ value: currentValue, size: fieldName });
        document.getElementById("counter_" + fieldName).value = currentValue;
    };

    return (
        <div>
            <span className="pull-right"><button className="btn inc-btn" onClick={handleIncDecCounter} data-countertype="inc"><FaPlus /></button></span>
            <span className="pull-right"><Form.Control type="text" name={fieldName} onChange={handleCounterChange} id={"counter_" + fieldName} placeholder="0" defaultValue={props.counter} /></span>
            <span className="pull-right"><button className="btn dec-btn" onClick={handleIncDecCounter} data-countertype="dec"><FaMinus /></button></span>
        </div>
    )
}

export default Counter
