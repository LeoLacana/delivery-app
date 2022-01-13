import React, { useState, useEffect } from 'react';
import HeaderUsers from '../components/HeaderUsers';
import OrderCard from '../components/OrderCard';
import { getApiWithToken } from '../helper/api';

function Orders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getApiWithToken('/customer/orders', setSales);
  }, []);

  return (
    <>
      <HeaderUsers />
      <OrderCard sales={ sales } />
    </>
  );
}

export default Orders;
