import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import ProductHelpers from '../settings/ProductsArray';
import Counter from './Counter';

const ProductDetails = ({ match }) => {
    const productId = match.params.id || '';
    const productInfo = ProductHelpers.GetProductById(productId) || '';
    const productSrc = productInfo ? productInfo.src : '';
    const [selecedColor, setSelectedColor] = useState(productInfo.selectedColor);
    const [selecedProductSrc, setSelectedProductSrc] = useState(productSrc);
    const [isSmallSize, setSmallSize] = useState(false);
    const [isMediumSize, setMediumSize] = useState(false);
    const [isLargSize, setLargeSize] = useState(false);
    let disableBtnClass = '';

    // Increment/Decrement Counter
    const [counter, setCounter] = useState(0);

    const handleIncDecCounter = (data) => {
        const counterType = data ? data.counterType : '';
        let newValue = data ? data.value * 1 : 0;
        let sizeName = data ? data.size : '';
        let checkbox = document.getElementById(sizeName).checked;
        let currentValue = document.getElementById('counter_' + sizeName).value;

        console.log("data", data);

        if ((sizeName && newValue >= 1 && !checkbox) || (sizeName && newValue === 0 && checkbox)) {
            document.getElementById(sizeName).click();
        }

        if (counterType === 'inc') {
            newValue = counter + 1;
        } else {
            console.log("newValue", newValue, "currentValue", currentValue);
            if (newValue !== 0 || (counter && currentValue > 0 && newValue === 0)) newValue = counter - 1;
            else newValue = counter;
        }

        setCounter(newValue);
    };

    // Counter onchange
    const handleCounterChange = (data) => {
        let small = document.getElementById('counter_small').value * 1;
        let medium = document.getElementById('counter_medium').value * 1;
        let large = document.getElementById('counter_large').value * 1;
        let newCounterValue = 0;

        if (small) newCounterValue += small;
        if (medium) newCounterValue += medium;
        if (large) newCounterValue += large;

        // if (!checkbox) document.getElementById(sizeName).click();
        setCounter(newCounterValue);
    };

    // Set disable class
    if (!counter) {
        disableBtnClass = 'disable-btn';
    }

    useEffect(() => {
        const productCode = productInfo && productInfo.code ? productInfo.code.toLowerCase() : '';
        const src = '../assets/images/' + productCode + '_' + selecedColor + '.jpeg';
        setSelectedProductSrc(src);
    }, [selecedColor]);

    // Selected color change
    const changeColor = (e) => {
        let newSelectedColor = e.currentTarget.dataset.color;
        setSelectedColor(newSelectedColor);
    };

    const handleChangeChk = (e) => {
        let newSize = e.currentTarget.dataset.size;
        let checkbox = e.target.checked;

        if (newSize === 'small') {
            checkbox ? setSmallSize(false) : setSmallSize(true);
        } else if (newSize === 'medium') {
            checkbox ? setMediumSize(false) : setMediumSize(true);
        } else if (newSize === 'large') {
            checkbox ? setLargeSize(false) : setLargeSize(true);
        }

        // Counter value update
        let currentValue = document.getElementById('counter_' + newSize).value * 1 || 0;
        let newValue = 0;
        let counterValue = counter;

        if (checkbox) {
            newValue = currentValue + 1;
            counterValue = counter + 1;
        } else {
            counterValue = counter - currentValue;
        }
        setCounter(counterValue);
        document.getElementById("counter_" + newSize).value = newValue;
    };

    return (
        <Container fluid className="product-details">
            <Row>
                <Col xs={12} md={3} lg={4}>
                    <Card>
                        <Card.Img variant="top" src={selecedProductSrc} />
                    </Card>
                </Col>
                <Col xs={12} md={9} lg={8}>
                    <h1 className="product-title">{productInfo.title}</h1>
                    <small>Product Code: {productInfo.code}</small>
                    <div><strong>Plain Pricing</strong></div>
                    <hr />
                    <div>
                        <Row>
                            <Col>
                                <div>1 item</div>
                                <div className="plain-price">£{productInfo.maxPrice}</div>
                            </Col>
                            <Col>
                                <div>25+ items</div>
                                <div className="plain-price">£10.90</div>
                                <small>save 5%</small>
                            </Col>
                            <Col>
                                <div>50+ items</div>
                                <div className="plain-price">£10.19</div>
                                <small>save 12%</small>
                            </Col>
                            <Col>
                                <div>75+ items</div>
                                <div className="plain-price">£9.68</div>
                                <small>save 16%</small>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="step-area">
                        <div>
                            <span className="title">1. Select Colour</span>
                            <span className="pull-right">
                                <small>{productInfo.color} {productInfo.color > 1 ? 'Colours' : 'Colour'} available</small>
                            </span>
                        </div>
                        <div className="color-box-area">
                            {productInfo.colors.map((color, index) => (
                                <span key={index} onClick={changeColor} data-color={color}>
                                    {selecedColor === color &&
                                        <FaCheckCircle size="2em" color={color} className="custom-color" />
                                    }
                                    {selecedColor !== color &&
                                        <FaCircle size="2em" color={color} className="custom-color" />
                                    }
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="step-area">
                        <div className="title">2. Sizes & Quantities</div>
                        <div className="size-box-area">
                            <Row className="size-row">
                                <Col xs={6} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="small">
                                        <Form.Check type="checkbox" label="S" onClick={handleChangeChk} data-size="small" defaultChecked={isSmallSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={4} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="small" onClick={handleIncDecCounter} onChange={handleCounterChange} />
                                </Col>
                            </Row>
                            <Row className="size-row">
                                <Col xs={6} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="medium">
                                        <Form.Check type="checkbox" label="M" onClick={handleChangeChk} data-size="medium" defaultChecked={isMediumSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={4} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="medium" onClick={handleIncDecCounter} onChange={handleCounterChange} />
                                </Col>
                            </Row>
                            <Row className="size-row">
                                <Col xs={6} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="large">
                                        <Form.Check type="checkbox" label="L" onClick={handleChangeChk} data-size="large" defaultChecked={isLargSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={4} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="large" onClick={handleIncDecCounter} onChange={handleCounterChange} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="step-area">
                        <div className="title">3. Add to basket</div>
                        <div className="basket-box-area">
                            <Row>
                                <Col xs={4} md={4} lg={4}>
                                    <div>Total items</div>
                                    <div className="plain-price">{counter}</div>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <div>Price per items</div>
                                    <div className="plain-price">£{productInfo.maxPrice}</div>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <div>Total (no customisations)</div>
                                    <div className="plain-price">£{(counter * productInfo.maxPrice).toFixed(2)}</div>
                                    <small>ex. VAT</small>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Button variant="success addto-btn" className={disableBtnClass}>Add to basket</Button>
                            </Row>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}



export default ProductDetails
