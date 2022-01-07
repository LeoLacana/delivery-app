import React, { useEffect, useState } from 'react';

import api from '../helper/api';

import ProductCard from './ProductCard';

import mockProducts from '../mock/products';

const fetchApi = async (route, setState, valid = false) => {
  if (valid) {
    const { data } = await api.get(route);

    setState(data);
  }

  setState(mockProducts);
};

function ProductsBoard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi('/products', setProducts);
  }, []);

  return (
    <div>
      {
        products.map((product, index) => (
          <ProductCard key={ index } product={ product } />
        ))
      }
    </div>
  );
}

export default ProductsBoard;
