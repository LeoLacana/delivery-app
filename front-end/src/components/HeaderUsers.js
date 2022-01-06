import React from 'react';

function HeaderUsers() {
  const localStorageUser = localStorage.getItem('user');

  const user = JSON.parse(localStorageUser);

  return (
    <header>
      <div>
        <p
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </p>
        <p
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </p>
      </div>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default HeaderUsers;
