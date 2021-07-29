import { Row, Col, Form } from 'react-bootstrap';
import { FaBuffer, FaStarOfDavid, FaExclamationTriangle } from 'react-icons/fa';

import { useContext } from 'react';
import { AddCustomisationContext } from '../LogoCustomisation';
import ProductHelpers from '../../settings/ProductsArray';

const ApplicationMethod = () => {
    let { methodName, productId, handleAppMethod } = useContext(AddCustomisationContext);
    const productInfo = productId ? ProductHelpers.GetProductById(productId) : null;
    let isDisableEmbroidery = false;

    if (methodName === "embroidery" && productInfo && !productInfo.isEmbroidery) {
        isDisableEmbroidery = true;
        methodName = "print";
    }

    const appMethodChange = (event) => {
        if (isDisableEmbroidery) return false;
        const applMethodName = event.currentTarget.dataset.type;
        const isChecked = document.getElementById(applMethodName).checked;

        handleAppMethod({ name: applMethodName, value: isChecked });
    };

    return (
        <div>
            <Row className="step-title-area">
                <h4>2. Choose application method</h4>
            </Row>
            <Row>
                <div className={`hide  ${isDisableEmbroidery ? "disable-container" : ""}`}>
                    <div className="warning-color"><FaExclamationTriangle /> Embroidery (stitching) isn't available for one of the below reasons:</div>
                    <ul>
                        <li>The garment weight (GSM) is too low to allow embroidery on this position.</li>
                        <li>Embroidery isn't an applicable on this product/bundle</li>
                        <li>You have chosen a Print only artwork position</li>
                    </ul>
                    <small>Please call us on 0000 000 0000 if you wish to embroider this item we might be able to help!</small>
                </div>
            </Row>
            <Row className={`appl-method-area ${methodName === "embroidery" ? "active-area" : ""} ${isDisableEmbroidery ? "disable-embroidery" : ""} `}>
                <Col md={1}>
                    <Form.Group className="mb-3 `{}`" controlId="embroidery">
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
