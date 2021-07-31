import { Row, Col, Form } from 'react-bootstrap';

const Artwork = (props) => {

    return (
        <div>
            <Row className="step-title-area">
                <h4>3. Choose artwork</h4>
                <small>Add your logo/text</small>
            </Row>
            <Row className="artwork-area active-area">
                <Col xs={2} md={1} lg={1}>
                    <Form.Group className="mb-3" controlId="artwork">
                        <Form.Check type="radio" label="" defaultChecked={true} data-type="embroidery" />
                    </Form.Group>
                </Col>
                <Col xs={2} md={1} lg={1}>
                    <div className="new-circle">NEW</div>
                </Col>
                <Col xs={3} md={3} lg={3} className="artwork-text">Add a new customisation</Col>
                <Col className="artwork-text">+ £8.95 One-Time Logo Setup Fee</Col>
            </Row>
        </div>
    )
}

export default Artwork
