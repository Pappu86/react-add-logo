import { Row, Col, Form } from 'react-bootstrap';
import { FaBuffer, FaStarOfDavid } from 'react-icons/fa';

import { useState, useEffect } from 'react';

const ApplicationMethod = (props) => {
    console.log("props", props);
    const [isEmbroidery, setEmbroidery] = useState(true);
    const [isPrint, setPrint] = useState(false);

    const handleAppMethod = (event) => {
        const applMethodName = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(applMethodName).checked;
        console.log("applMethodName", applMethodName, "isChecked: ", isChecked);

        document.getElementById(applMethodName).click();

        if (applMethodName === "embroidery" && isChecked) {
            setEmbroidery(true);
        } else {
            setEmbroidery(false);
        }

        if (applMethodName === "print" && isChecked) {
            setPrint(true);
        } else {
            setPrint(false);
        }

        props.onClick({ name: applMethodName, value: isChecked });
    };

    useEffect(() => {
        console.log("isEmbroidery-2222: ", isEmbroidery);
        console.log("isPrint-2222: ", isPrint);
    }, []);


    return (
        <div>
            <Row className="step-title-area">
                <h4>2. Choose application method</h4>
            </Row>
            <Row className={`appl-method-area ${isEmbroidery ? "active-area" : ""}`}>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="embroidery">
                        <Form.Check type="radio" label="" defaultChecked={isEmbroidery} data-type="embroidery" onClick={handleAppMethod} />
                    </Form.Group>
                </Col>
                <Col md={1}><FaStarOfDavid className="method-icon" /></Col>
                <Col md={10}>
                    <div>Embroidery (Stitching)</div>
                    <div>Detailed and durable ideal for uniforms.</div>
                </Col>
            </Row>
            <Row className={`appl-method-area ${isPrint ? "active-area" : ""}`}>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="print">
                        <Form.Check type="radio" label="" defaultChecked={isPrint} data-type="print" onClick={handleAppMethod} />
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
