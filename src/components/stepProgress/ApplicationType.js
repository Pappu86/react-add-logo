import { Row, Col, Form } from 'react-bootstrap';
import { FaStarOfLife, FaTextHeight } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const ApplicationType = (props) => {
    const [isLogo, setLogo] = useState(true);
    const [isText, setText] = useState(false);

    const handleAppType = (event) => {
        const applTypeName = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(applTypeName).checked;

        console.log("applTypeName", applTypeName, "isChecked: ", isChecked);

        document.getElementById(applTypeName).click();

        if (applTypeName === "logo" && isChecked) {
            setLogo(true);
            setText(false);
            document.getElementById('text').checked = false;
        }

        if (applTypeName === "print" && isChecked) {
            setText(true);
            setLogo(false);
            document.getElementById('logo').checked = false;
        }

        props.onClick({ name: applTypeName, value: isChecked });
    };

    useEffect(() => {
        console.log("isLogo-2222: ", isLogo);
        console.log("isText-2222: ", isText);
    }, []);

    return (
        <div>
            <Row className="step-title-area">
                <h4>4. Choose application type</h4>
            </Row>
            <Row className={`appl-method-area ${isLogo ? "active-area" : ""}`} >
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="logo">
                        <Form.Check type="radio" label="" onClick={handleAppType} defaultChecked={isLogo} data-type="logo" />
                    </Form.Group>
                </Col>
                <Col md={1}><FaStarOfLife className="method-icon" /></Col>
                <Col className="artwork-text">Logo</Col>
            </Row>
            <Row className={`appl-method-area ${isText ? "active-area" : ""}`} >
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Check type="radio" label="" onClick={handleAppType} defaultChecked={isText} data-type="text" />
                    </Form.Group>
                </Col>
                <Col md={1}><FaTextHeight className="method-icon" /></Col>
                <Col className="artwork-text">Text</Col>
            </Row>
        </div>
    )
}

export default ApplicationType
