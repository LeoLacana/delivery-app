import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderUsers() {
  const redirect = useNavigate();

  const localStorageUser = localStorage.getItem('user');
  const { name } = JSON.parse(localStorageUser);

  const userCheckout = () => {
    localStorage.removeItem('user');
    redirect('/');
  };

  return (
    <header>
      <div>
        <p
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => redirect('/customer/orders') }
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {name}
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => userCheckout() }
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default HeaderUsers;
