import { Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';

const Artwork = (props) => {
    console.log("This is child Artwork");
    console.log("props", props);

    const [isArtwork, setArtwork] = useState(true);

    return (
        <div>
            <Row className="step-title-area">
                <h4>3. Choose artwork</h4>
                <small>Add your logo/text</small>
            </Row>
            <Row className="artwork-area active-area">
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="artwork">
                        <Form.Check type="radio" label="" defaultChecked={isArtwork} data-type="embroidery" />
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <div className="new-circle">NEW</div>
                </Col>
                <Col md={3} className="artwork-text">Add a new customisation</Col>
                <Col className="artwork-text">+ £8.95 One-Time Logo Setup Fee</Col>
            </Row>
        </div>
    )
}

export default Artwork
