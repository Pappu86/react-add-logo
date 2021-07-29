import { Row, Col, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';

import FontPicker from "font-picker-react";
import ReactDropzone from './ReactDropzone';
import { AddCustomisationContext } from '../LogoCustomisation';

const ConfigureLogo = (props) => {
    const { methodTypeName, selectedLogoManageType, handleManageLogo } = useContext(AddCustomisationContext);
    let [activeFontFamily, setActiveFont] = useState("Yanone Kaffeesatz");

    const nextFont = (event) => {
        const fontName = event.family;
        setActiveFont(fontName);
    };

    const changeManageLogo = (event) => {
        const logoManageType = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(logoManageType).checked;
        handleManageLogo({ type: logoManageType, value: isChecked });
    };

    return (
        <div className="logo-configuration">
            <Row className="step-title-area">
                <h4>5. Configure your logo</h4>
            </Row>
            {methodTypeName === 'logo' &&
                <div>
                    <Row>
                        <Form.Group className="mb-3" controlId="upload_logo">
                            <Form.Check className="" type="radio" name="logo" onChange={changeManageLogo}
                                defaultChecked={selectedLogoManageType === 'upload_logo' ? true : false} data-type="upload_logo"
                                label="Upload a logo file" />
                        </Form.Group>
                    </Row>
                    {selectedLogoManageType === 'upload_logo' &&
                        <Row className="dropzone-area">
                            <ReactDropzone />
                        </Row>
                    }
                    <Row>
                        <Form.Group className="mb-3" controlId="contact_me">
                            <Form.Check type="radio" name="logo" defaultChecked={selectedLogoManageType === 'contact_me' ? true : false}
                                onChange={changeManageLogo} label="Contact me for a logo" data-type="contact_me" />
                            <small className="contact-me">The team will email you after purchase to collect your logo and discuss.</small>
                        </Form.Group>
                    </Row>
                </div>
            }

            {methodTypeName === 'text' &&
                <div>
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
                            <FontPicker apiKey="AIzaSyBGS4syEiE8-eQ4OtoiCs-vKsL__wlB1JQ" activeFontFamily={activeFontFamily}
                                onChange={nextFont} />
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
                </div>
            }
            <Row className="form-field-area">
                <Form.Group controlId="instruction">
                    <Form.Label>Special instructions</Form.Label>
                    <Form.Control as="textarea" placeholder="Please let us know if you have any special requirements"
                        style={{ height: '80px' }} />
                </Form.Group>
            </Row>
            <Row className="form-field-area">
                <Form.Group controlId="customisation">
                    <Form.Label>Customisation name</Form.Label>
                    <Form.Control type="text" placeholder="" size="lg" />
                </Form.Group>
            </Row>
        </div >
    )
}

export default ConfigureLogo
