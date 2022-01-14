import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getApi } from '../helper/api';

import HeaderUsers from '../components/HeaderUsers';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import CheckoutProducts from '../components/CheckoutProducts';

const adjustProductsObject = ({ products }) => (
  products.map((product) => {
    const { SalesProducts, ...info } = product;
    return ({
      ...info,
      quantity: SalesProducts.quantity,
    });
  })
);

function OrderDetails() {
  const { orderId } = useParams();

  const [order, setOrder] = useState({ loading: true, products: [] });
  const [products, setProducts] = useState([]);

  useEffect(() => getApi(`/customer/orders/${orderId}`, setOrder), []);

  useEffect(() => {
    setProducts(adjustProductsObject(order));
  }, [order]);

  if (order.loading) {
    return (
      <p>Carregando...</p>
    );
  }

  return (
    <div>
      <HeaderUsers />
      <h1>Detalhe do Pedido</h1>
      <OrderDetailsHeader order={ order } />
      <CheckoutProducts cart={ products } page="order_details" />
    </div>
  );
}

export default OrderDetails;
