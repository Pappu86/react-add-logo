import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <Col >
            <Card className="product-list">

                <Link to={{ pathname: `/${product.path}/${product.id}`, query: product }} >
                    <Card.Img variant="top" src={product.src} />
                </Link>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        <span>£{product.minPrice}{' '}-{' '}£{product.maxPrice}</span>
                        <span>{' '}ex. VAT</span>
                    </Card.Text>
                    <hr />
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                            <small>{product.color} {product.color > 1 ? 'Colours' : 'Colour'} available</small>
                        </Col>
                        <Col xs={12} md={8} lg={8} className="badge-area">
                            {product.isPrint ? <span className="badge bg-primary">Print Available</span>
                                : ''}
                            {' '}
                            {product.isEmbroidery ? <span className="badge bg-success">Embroidery Available</span>
                                : ''}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product
