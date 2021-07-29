import { Row, Col, Form } from 'react-bootstrap';
import { FaBuffer, FaStarOfDavid } from 'react-icons/fa';

import { useState, useEffect, useContext } from 'react';
import { AddCustomisationContext } from '../LogoCustomisation';

const ApplicationMethod = () => {
    console.log("This is child Application method");
    const { methodName, handleAppMethod } = useContext(AddCustomisationContext);

    console.log("methodName", methodName, "---handleAppMethod: ", handleAppMethod);

    const appMethodChange = (event) => {
        const applMethodName = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(applMethodName).checked;

        handleAppMethod({ name: applMethodName, value: isChecked });
    };

    return (
        <div>
            <Row className="step-title-area">
                <h4>2. Choose application method</h4>
            </Row>
            <Row className={`appl-method-area ${methodName === "embroidery" ? "active-area" : ""}`}>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="embroidery">
                        <Form.Check type="radio" name="app_method" label="" defaultChecked={methodName.includes('embroidery')}
                            data-type="embroidery" onChange={appMethodChange} />
                    </Form.Group>
                </Col>
                <Col md={1}><FaStarOfDavid className="method-icon" /></Col>
                <Col md={10}>
                    <div>Embroidery (Stitching)</div>
                    <div>Detailed and durable ideal for uniforms.</div>
                </Col>
            </Row>
            <Row className={`appl-method-area ${methodName === "print" ? "active-area" : ""}`}>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="print">
                        <Form.Check type="radio" name="app_method" label="" defaultChecked={methodName.includes('print')}
                            data-type="print" onChange={appMethodChange} />
                    </Form.Group>
                </Col>
                <Col md={1}><FaBuffer className="method-icon" /></Col>
                <Col md={10}>
                    <div>Print</div>
                    <div>Vivid and flexible ideal for general use.</div>
                </Col>
            </Row>
        </div>
    )
}

export default ApplicationMethod
