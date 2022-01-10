import React, { useEffect, useState } from 'react';

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
    <div>
      {
        products.map((product, index) => (
          <ProductCard key={ index } product={ product } />
        ))
      }
      <SeeCartButton />
    </div>
  );
}

export default ProductsBoard;
