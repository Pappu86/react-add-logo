import { Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AddToBasketModal = (props) => {
    let show = props.show;
    let data = props.modalData;

    return (
        <Modal show={show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Added to basket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={3} md={3} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={data.selectedProductSrc} />
                        </Card>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <h3>{data.title}</h3>
                        <div>Product code: {data.code}</div>
                        <div>Color: <span className="text-upercase">{data.selectedColor}</span></div>
                        <div>Items: {data.totalItems}</div>
                        <div>Per Item: £{data.price}</div>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                        <div className="total-price">£{data.price * data.totalItems}</div>
                        <small>ex. VAT</small>
                    </Col>
                </Row>
                {/* <Row>
                    <Button variant="success" className="add-logo-btn" onClick={props.onHide}>
                        Add your logo now
                    </Button>
                </Row> */}
            </Modal.Body>
            <Modal.Footer>
                <Link to="" className="btn btn-success">
                    Add your logo now
                </Link>
                {/* <Button variant="success" onClick={props.onHide}>
                    Add your logo now
                </Button> */}
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddToBasketModal
