import React from 'react';
import { Navigate } from 'react-router-dom';

import HeaderUsers from '../components/HeaderUsers';
import ProductsBoard from '../components/ProductsBoard';

function Products() {
  if (!localStorage.getItem('user')) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <HeaderUsers />
      <ProductsBoard />
    </>
  );
}

export default Products;
