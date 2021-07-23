import { Container, Card, Row, Col, Form } from 'react-bootstrap';
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
    const [counter, setCounter] = useState(1);
    const [isSmallSize, setSmallSize] = useState(false);
    const [isMediumSize, setMediumSize] = useState(false);
    const [isLargSize, setLargeSize] = useState(false);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        const productCode = productInfo && productInfo.code ? productInfo.code.toLowerCase() : '';
        const src = '../assets/images/' + productCode + '_' + selecedColor + '.jpeg';
        setSelectedProductSrc(src);
    }, [selecedColor]);

    // Selected color change
    const changeColor = (e) => {
        let newSelectedColor = e.currentTarget.dataset.color;
        console.log("newSelectedColor", newSelectedColor);
        setSelectedColor(newSelectedColor);
    };

    const handleChangeChk = (e) => {
        let newSize = e.currentTarget.dataset.size;
        let checkbox = e.target.checked;

        if (newSize === 's') {
            checkbox ? setSmallSize(false) : setSmallSize(true);
        } else if (newSize === 'm') {
            checkbox ? setMediumSize(false) : setMediumSize(true);
        } else if (newSize === 'l') {
            checkbox ? setLargeSize(false) : setLargeSize(true);
        }
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
                    <h1>{productInfo.title}</h1>
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
                                <Col xs={12} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="small">
                                        <Form.Check type="checkbox" label="S" onClick={handleChangeChk} data-size="s" defaultChecked={isSmallSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={12} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="small" counter={counter} onClick={incrementCounter} />
                                    {/* <span className="pull-right"><button className="btn"><FaPlus /></button></span>
                                    <span className="pull-right"><Form.Control type="text" placeholder="0" /></span>
                                    <span className="pull-right"><button className="btn"><FaMinus /></button></span> */}
                                </Col>
                            </Row>
                            <Row className="size-row">
                                <Col xs={12} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="medium">
                                        <Form.Check type="checkbox" label="M" onClick={handleChangeChk} data-size="m" defaultChecked={isMediumSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={12} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="medium" counter={counter} />
                                    {/* <span className="pull-right"><button className="btn"><FaPlus /></button></span>
                                    <span className="pull-right"><Form.Control type="text" placeholder="0" /></span>
                                    <span className="pull-right"><button className="btn"><FaMinus /></button></span> */}
                                </Col>
                            </Row>
                            <Row className="size-row">
                                <Col xs={12} md={6} lg={7} className="size-items">
                                    <Form.Group className="mb-3" controlId="larg">
                                        <Form.Check type="checkbox" label="L" onClick={handleChangeChk} data-size="l" defaultChecked={isLargSize} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={2} lg={2}>
                                    <small>In Stock</small>
                                </Col>
                                <Col xs={12} md={4} lg={3} className="counter-area">
                                    <Counter fieldName="large" counter={counter} />
                                    {/* <span className="pull-right"><button className="btn"><FaPlus /></button></span>
                                    <span className="pull-right"><Form.Control type="text" placeholder="0" /></span>
                                    <span className="pull-right"><button className="btn"><FaMinus /></button></span> */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="step-area">
                        <div className="title">3. Add to basket</div>
                        <div className="basket-box-area">fgfdg</div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}



export default ProductDetails
