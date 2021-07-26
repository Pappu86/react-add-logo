import { Row, Col, Card, Form } from 'react-bootstrap';
import { FaDotCircle, FaStarOfDavid, FaBurn } from 'react-icons/fa';

const ApplicationMethod = (props) => {
    return (
        <div>
            <Row className="step-title-area">
                <h4>2. Choose application method</h4>
            </Row>
            <Row className="appl-method-area">
                <Col md={1}><input type="radio" name="radio" id="embroidery" class="form-check-input" /></Col>
                <Col md={1}><FaStarOfDavid /></Col>
                <Col md={10}>
                    <div>Embroidery (Stitching)</div>
                    <div>Detailed and durable ideal for uniforms.</div>
                </Col>
            </Row>
            <Row className="appl-method-area">
                <Col md={1}><input type="radio" name="radio" id="embroidery" class="form-check-input" /></Col>
                <Col md={1}><FaStarOfDavid /></Col>
                <Col md={10}>
                    <div>Embroidery (Stitching)</div>
                    <div>Detailed and durable ideal for uniforms.</div>
                </Col>
            </Row>
        </div>
    )
}

export default ApplicationMethod
