import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';

import { useState } from 'react';

//import DefaultColors from "../settings/ColorSettings";

const ProductDetails = ({ location }) => {
    const productInfo = location.params;

    const [selecedColor, setSelectedColor] = useState(productInfo.selectedColor);

    const changeColor = (e) => {
        let newSelectedColor = e.currentTarget.dataset.color;
        console.log("newSelectedColor", newSelectedColor);
        setSelectedColor(newSelectedColor);
    };

    return (
        <Container fluid className="product-details">
            <Row>
                <Col xs={12} md={3} lg={4}>
                    <Card>
                        <Card.Img variant="top" src={productInfo.src} />
                    </Card>
                </Col>
                <Col xs={12} md={9} lg={8}>
                    <h1>{productInfo.title}</h1>
                    <small>Product Code: {productInfo.code}</small>
                    <div>Plain Pricing</div>
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
                            <div className="size-row">
                                dfgdsfg
                            </div>
                            <div className="size-row">
                                fdgdsfgdfg
                            </div>
                            <div className="size-row">
                                fdgfdg
                            </div>
                            <div className="size-row">
                                dfsgdfg
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}



export default ProductDetails
