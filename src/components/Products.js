import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';

const products = [
  {
    id: 1,
    code: 'S440',
    title: "Rain Jacket",
    path: 'rain-jacket',
    src: "../assets/images/s440bkr_1_3.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 6,
    colors: ['black', 'grey', 'navy', 'green', 'orange', 'yellow'],
    selectedColor: 'black',
    isPrint: true,
    isEmbroidery: true
  },
  {
    id: 2,
    code: 'B195',
    title: "Turin Premium T-Shirt",
    path: 'turin-premium-t-shirt',
    src: "../assets/images/b195_royal.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 5,
    colors: ['black', 'grey', 'blue', 'green', 'orange'],
    selectedColor: 'blue',
    isPrint: true,
    isEmbroidery: false
  },
  {
    id: 3,
    code: 'TX14',
    title: "Texo Contrast Shorts",
    path: 'texo-contrast-shorts',
    src: "../assets/images/tx14nar_7.jpeg",
    minPrice: 9.17,
    maxPrice: 11.52,
    color: 3,
    colors: ['black', 'grey', 'navy'],
    selectedColor: 'navy',
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
          <Product key={product.id} product={product} />
        ))}
      </Row>

    </Container>
  )
}

export default Products
