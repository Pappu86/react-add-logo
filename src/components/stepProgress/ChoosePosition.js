import { Row, Col, Card, Form } from 'react-bootstrap';
import { FaDotCircle, FaStarOfDavid } from 'react-icons/fa';

const ChoosePosition = () => {
    return (
        <div>
            <Row className="step-title-area">
                <h4>1. Choose position(s)</h4>
            </Row>
            <Row>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_right.jpeg" />
                        <Card.Body>
                            <Card.Title>Left Breast</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="left-breast">
                                        <Form.Check type="checkbox" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_left.jpeg" />
                        <Card.Body>
                            <Card.Title>Right Breast</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="right-breast">
                                        <Form.Check type="checkbox" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_left_sleeve.jpeg" />
                        <Card.Body>
                            <Card.Title>Left Sleeve</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="left-sleeve">
                                        <Form.Check type="checkbox" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_right_sleeve.jpeg" />
                        <Card.Body>
                            <Card.Title>Right Sleeve</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="right-sleeve">
                                        <Form.Check type="checkbox" name="logo_position" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_back.jpeg" />
                        <Card.Body>
                            <Card.Title>Big Back</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="big-back">
                                        <Form.Check type="checkbox" name="logo_position" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_neck.jpeg" />
                        <Card.Body>
                            <Card.Title>Nape of Neck</Card.Title>
                            <Card.Text>
                                <div><small>(applied to all)</small></div>
                                <div><small className="text-muted">Application options</small></div>
                                <div className="logo-type-area">
                                    <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                    <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                                </div>
                                <div className="card-checkbox">
                                    <Form.Group className="mb-3" controlId="nape_neck">
                                        <Form.Check type="checkbox" name="logo_position" label="" />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePosition
