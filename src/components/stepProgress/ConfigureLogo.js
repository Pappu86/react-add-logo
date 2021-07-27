import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import FontPicker from "font-picker-react";


const ConfigureLogo = (props) => {
    let [activeFont, setActiveFont] = useState("Yanone Kaffeesatz");

    const nextFont = (event) => {
        setActiveFont(event.family);
    };

    return (
        <div>
            <Row className="step-title-area">
                <h4>5. Configure your logo</h4>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="logo">
                    <Form.Check type="radio" name="radio" label="Upload a logo file" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="contact-me">
                    <Form.Check type="radio" name="radio" label="Contact me for a logo" />
                    <p>The team will email you after purchase to collect your logo and discuss.</p>
                </Form.Group>
            </Row>
            <Row className="form-field-area">
                <Form.Group as={Col} controlId="text1">
                    <Form.Label>Text Line 1 *</Form.Label>
                    <Form.Control type="text" placeholder="Text Line 1" size="lg" />
                </Form.Group>
                <Form.Group as={Col} controlId="text2">
                    <Form.Label>Text Line 2 (Optional)</Form.Label>
                    <Form.Control type="text" placeholder="Text Line 2" size="lg" />
                </Form.Group>
                <Form.Group as={Col} controlId="text3">
                    <Form.Label>Text Line 3 (Optional)</Form.Label>
                    <Form.Control type="text" placeholder="Text Line 3" size="lg" />
                </Form.Group>
            </Row>
            <Row className="form-field-area">
                <Form.Group controlId="font">
                    <Form.Label>Font</Form.Label>
                    <FontPicker apiKey="AIzaSyBGS4syEiE8-eQ4OtoiCs-vKsL__wlB1JQ" activeFont={activeFont} onChange={nextFont} />
                    <p className="apply-font">The font will be applied to this text.</p>
                </Form.Group>
            </Row>
            {/* <Row className="form-field-area">
                <Form.Group controlId="color">
                    <Form.Label>Color</Form.Label>
                    <select className="form-select form-select-lg" name="" id="">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </select>
                </Form.Group>
            </Row>
            <Row className="form-field-area">
                <Form.Label>Text Preview</Form.Label>
                <div className="text-preview"></div>
            </Row> */}
            <Row className="form-field-area">
                <Form.Group controlId="instruction">
                    <Form.Label>Special instructions</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </Form.Group>
            </Row>
            <Row className="form-field-area">
                <Form.Group controlId="customisation">
                    <Form.Label>Customisation name</Form.Label>
                    <Form.Control type="text" placeholder="" size="lg" />
                </Form.Group>
            </Row>
        </div>
    )
}

export default ConfigureLogo
