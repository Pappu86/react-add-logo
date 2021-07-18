import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';

const products = [
  {
    id: 1,
    title: "Rain Jacket",
    src: "../assets/images/s440bkr_1_3.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 6,
    isPrint: true,
    isEmbroidery: true
  },
  {
    id: 2,
    title: "Turin Premium T-Shirt",
    src: "../assets/images/b195_royal.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 5,
    isPrint: true,
    isEmbroidery: false
  },
  {
    id: 3,
    title: "Texo Contrast Shorts",
    src: "../assets/images/tx14nar_7.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 3,
    isPrint: false,
    isEmbroidery: true
  }
];

const Products = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="page-title">Product List</h1>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col >
            <Product key={product.id} product={product} />
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default Products
