import React, { useState } from 'react';
import HeaderUsers from '../components/HeaderUsers';
import OrderCard from '../components/OrderCard';
import api from '../helper/api';

const fetchApi = async (route, setState) => {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage);

  const { data } = await api.get(route, {}, { token: user.token });

  setState(data);
};

function Orders() {
  const [sales, setSales] = useState([{}]);

  useEffect(() => {
    fetchApi('/customer/orders', setSales);
  }, []);

  return (
    <>
      <HeaderUsers />
      <OrderCard sales={ sales } />
    </>
  );
}

export default Orders;
