import { Row, Col, Form } from 'react-bootstrap';
import { FaStarOfLife, FaTextHeight } from 'react-icons/fa';

import { useContext } from 'react';
import { AddCustomisationContext } from '../LogoCustomisation';


const ApplicationType = () => {
    const { methodTypeName, handleAppType } = useContext(AddCustomisationContext);

    const changeAppType = (event) => {
        const applTypeName = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(applTypeName).checked;

        handleAppType({ name: applTypeName, value: isChecked });
    };

    return (
        <div>
            <Row className="step-title-area">
                <h4>4. Choose application type</h4>
            </Row>
            <Row className={`appl-method-area ${methodTypeName === "logo" ? "active-area" : ""}`} >
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="logo">
                        <Form.Check type="radio" name="method_type" label="" defaultChecked={methodTypeName === "logo" ? true : false}
                            data-type="logo" onChange={changeAppType} />
                    </Form.Group>
                </Col>
                <Col md={1}><FaStarOfLife className="method-icon" /></Col>
                <Col className="artwork-text">Logo</Col>
            </Row>
            <Row className={`appl-method-area ${methodTypeName === "text" ? "active-area" : ""}`} >
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Check type="radio" name="method_type" label="" defaultChecked={methodTypeName === "text" ? true : false}
                            onChange={changeAppType} data-type="text" />
                    </Form.Group>
                </Col>
                <Col md={1}><FaTextHeight className="method-icon" /></Col>
                <Col className="artwork-text">Text</Col>
            </Row>
        </div>
    )
}

export default ApplicationType
