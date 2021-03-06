import { Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AddToBasketModal = (props) => {
    let show = props.show;
    let data = props.modalData;

    // Prepare selected size data
    const small = document.getElementById('counter_small').value * 1 || 0;
    const medium = document.getElementById('counter_medium').value * 1 || 0;
    const large = document.getElementById('counter_large').value * 1 || 0;
    const selectedSize = [];

    if (small) selectedSize.push({ size: "small", value: small });
    if (medium) selectedSize.push({ size: "medium", value: medium });
    if (large) selectedSize.push({ size: "large", value: large });

    data.selectedSize = selectedSize;

    return (
        <Modal show={show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">Added to basket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={3} md={3} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={data.selectedProductSrc} />
                        </Card>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <h4 className="product-title">{data.title}</h4>
                        <div>Product code: {data.code}</div>
                        <div>Color: <span className="text-upercase">{data.selectedColor}</span></div>
                        <div>Items: {data.totalItems}</div>
                        <div>Per Item: £{data.price}</div>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                        <div className="total-price">£{(data.price * data.totalItems).toFixed(2)}</div>
                        <small>ex. VAT</small>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Link to={{ pathname: `/customisation`, query: data }} className="btn btn-primary">
                    Add your logo now
                </Link>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddToBasketModal
