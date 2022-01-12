import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../helper/api';

import ProductCard from './ProductCard';
import SeeCartButton from './SeeCartButton';

const fetchApi = async (route, setState) => {
  const { data } = await api.get(route);

  setState(data);
};

function ProductsBoard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi('/customer/products', setProducts);
  }, []);

  return (
    <>
      <div
        style={ {
          marginTop: '20px',
          marginBottom: '45px',
          width: '100vw',
        } }
        className="justify-content-center "
      >
        <Row xs="auto" md="auto" className="justify-content-center g-3">
          {
            products.map((product, index) => (
              <Col md="auto" key={ index }>
                <ProductCard product={ product } />
              </Col>
            ))
          }
        </Row>
      </div>
      <SeeCartButton />
    </>
  );
}

export default ProductsBoard;
