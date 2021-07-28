import _ from 'underscore';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { FaDotCircle, FaStarOfDavid } from 'react-icons/fa';

import { useState, useEffect } from 'react';

//Redux
import { connect, useDispatch } from "react-redux";
import { stepBarOne } from './../../store/actions/logoCustomisation';
import { singleProductType } from './../../modelTypes/store';

const ChoosePosition = (props) => {
    console.log("This is child");
    console.log("props", props);
    props.stepperEvent(0);

    const dispatch = useDispatch();

    const [isLeftBreast, setLeftBreast] = useState(false);
    const [isRightBreast, setRightBreast] = useState(false);
    const [isLeftsleeve, setLeftSleeve] = useState(false);
    const [isRightSleeve, setRightSleeve] = useState(false);
    const [isBigBack, setBigBack] = useState(false);
    const [isNeck, setNeck] = useState(false);

    const handleLogoPosition = (event) => {
        const position = event.currentTarget.dataset.position;
        let elementIds = ['left_breast', 'right_breast', 'left_sleeve', 'right_sleeve', 'big_back', 'nape_neck'];
        let selectedArray = [];

        _.each(elementIds, (elementId) => {
            let isChecked = document.getElementById(elementId).checked;
            if (isChecked) selectedArray.push(elementId);
        });

        selectedArray = _.uniq(selectedArray);

        console.log("final array", selectedArray);

        props.onClick({ positions: selectedArray });
    };

    useEffect(() => {
        console.log("selectedPositions-2222: ", props.selectedPositions);
    }, []);

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
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="left_breast">
                                    <Form.Check type="checkbox" label="" defaultChecked={isLeftBreast} data-position="left_breast" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_left.jpeg" />
                        <Card.Body>
                            <Card.Title>Right Breast</Card.Title>
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="right_breast">
                                    <Form.Check type="checkbox" label="" defaultChecked={isRightBreast} data-position="right_breast" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_left_sleeve.jpeg" />
                        <Card.Body>
                            <Card.Title>Left Sleeve</Card.Title>
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="left_sleeve">
                                    <Form.Check type="checkbox" label="" defaultChecked={isLeftsleeve} data-position="left_sleeve" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
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
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="right_sleeve">
                                    <Form.Check type="checkbox" label="" defaultChecked={isRightSleeve} data-position="right_sleeve" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_back.jpeg" />
                        <Card.Body>
                            <Card.Title>Big Back</Card.Title>
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="big_back">
                                    <Form.Check type="checkbox" label="" defaultChecked={isBigBack} data-position="big_back" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="logo-card">
                        <Card.Img variant="top" className="logo-image" src="../assets/images/logo_neck.jpeg" />
                        <Card.Body>
                            <Card.Title>Nape of Neck</Card.Title>
                            <div><small>(applied to all)</small></div>
                            <div><small className="text-muted">Application options</small></div>
                            <div className="logo-type-area">
                                <span className="logo-type"><FaDotCircle className="logo-type-icon" /> Print</span>
                                <span className="logo-type"><FaStarOfDavid className="logo-type-icon" /> Embroidery</span>
                            </div>
                            <div className="card-checkbox">
                                <Form.Group className="mb-3" controlId="nape_neck">
                                    <Form.Check type="checkbox" label="" defaultChecked={isNeck} data-position="nape_neck" onClick={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default connect("", { stepBarOne })(ChoosePosition);