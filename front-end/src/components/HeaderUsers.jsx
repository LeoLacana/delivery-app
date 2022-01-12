import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </Navbar.Brand>
          <Nav
            className="me-auto"
          >
            <Nav.Link
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => redirect('/customer/orders') }
            >
              MEUS PEDIDOS
            </Nav.Link>
            <Nav.Link
              data-testid="customer_products__element-navbar-link-products"
              onClick={ () => redirect('/customer/products') }
            >
              PRODUTOS

            </Nav.Link>
            <Nav.Link
              href="#pricing"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => userCheckout() }
            >
              SAIR

            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderUsers;
