import _ from 'underscore';
import { Container, Row, Col, } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import ProductHelpers from '../../settings/ProductsArray';
import SettingHelpers from '../../settings/Settings';

const Basket = (props) => {
    let location = useLocation();
    const stepperData = location && location.state ? location.state : null;
    const productId = stepperData && stepperData.productId ? stepperData.productId : 1;
    const productInfo = ProductHelpers.GetProductById(productId) || null;
    const productSrc = (stepperData && stepperData.selectedProductSrc) ? stepperData.selectedProductSrc : productInfo && productInfo.src;
    const selectedSize = (stepperData && stepperData.selectedSize) ? stepperData.selectedSize : [{ size: "small", value: 1 }, { size: "medium", value: 1 }];
    const selectedColor = (stepperData && stepperData.selectedColor) ? stepperData.selectedColor : productInfo.selectedColor;
    const selectedPositions = stepperData && stepperData.selectedPositions ? stepperData.selectedPositions : [];

    let getPositionName = (name, index) => {
        index = index + 1;
        let arraySize = stepperData.selectedPositions.length;
        let positionName = SettingHelpers.getPositionName(name);
        if (arraySize !== index) positionName += ", ";

        return positionName;
    };

    const getSubTotal = () => {
        let subTotal = 0;
        _.each(selectedSize, (size) => {
            subTotal += (size.value * productInfo.maxPrice) + 8;
        });
        return subTotal.toFixed(2);
    };

    const getTotalItems = () => {
        let totalItems = 0;
        _.each(selectedSize, (size) => {
            totalItems += size.value;
        });
        return totalItems;
    };

    return (
        <Container className="my-basket">
            <Row>
                <Col>
                    <h1 className="page-title">Your order summary</h1>
                </Col>
            </Row>
            <div>
                {selectedSize.map((sizeItem, index) => (
                    <Row key={index} className="my-basket-item">
                        <Col xs={2} md={2} lg={1}><img src={productSrc} alt="" /></Col>
                        <Col>
                            <div><h4 className="product-title">{productInfo.title}</h4></div>
                            <div>Code: {productInfo.code}</div>
                            <div className="color-text">{selectedColor}/{sizeItem.size}</div>
                            <div>Items:{sizeItem.value}</div>
                        </Col>
                        <Col>
                            <div>Logos applied to this item</div>
                            <div>Positions: {' '}
                                {selectedPositions.map((position, index) => (
                                    <small className="position-name" key={position}>
                                        {getPositionName(position, index)}
                                    </small>
                                ))}
                            </div>
                        </Col>
                        <Col><span className="item-price">£{((sizeItem.value * productInfo.maxPrice) + 8).toFixed(2)}</span>{' '}<small>each inc. applications</small></Col>
                    </Row>
                ))}
            </div>
            <Row className="sub-total-area">
                <Col xs={1} md={2} lg={1}>Subtotal</Col>
                <Col><small>Items: {getTotalItems()}</small></Col>
                <Col></Col>
                <Col className="sub-total">£{getSubTotal()}</Col>
            </Row>
        </Container>
    )
}

export default Basket
