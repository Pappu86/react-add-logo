import _ from 'underscore';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { FaDotCircle, FaStarOfDavid } from 'react-icons/fa';

import { useState, useEffect, useContext } from 'react';
import { AddCustomisationContext } from '../LogoCustomisation';

const ChoosePosition = (props) => {
    const { positions, handleLogoPositions } = useContext(AddCustomisationContext);

    const handleLogoPosition = (event) => {
        let elementIds = ['left_breast', 'right_breast', 'left_sleeve', 'right_sleeve', 'big_back', 'nape_neck'];
        let checkedPositions = [];

        _.each(elementIds, (elementId) => {
            let isChecked = document.getElementById(elementId).checked;
            if (isChecked) checkedPositions.push(elementId);
        });

        checkedPositions = _.uniq(checkedPositions);
        handleLogoPositions({ positions: checkedPositions });
    };

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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('left_breast')} data-position="left_breast" onChange={handleLogoPosition} />
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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('right_breast')}
                                        data-position="right_breast" onChange={handleLogoPosition} />
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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('left_sleeve')}
                                        data-position="left_sleeve" onChange={handleLogoPosition} />
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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('right_sleeve')}
                                        data-position="right_sleeve" onChange={handleLogoPosition} />
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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('big_back')}
                                        data-position="big_back" onChange={handleLogoPosition} />
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
                                    <Form.Check type="checkbox" label="" defaultChecked={positions.includes('nape_neck')}
                                        data-position="nape_neck" onChange={handleLogoPosition} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePosition;