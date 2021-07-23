import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';
import ProductHelpers from '../settings/ProductsArray';

const products = ProductHelpers.GetProducts();

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
