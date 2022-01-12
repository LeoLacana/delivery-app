import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SeeCartButton({ cart }) {
  const redirect = useNavigate();

  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + (price * quantity), 0,
  );

  return (
    <div className="d-grid gap-2 fixed-bottom">
      <Button
        variant="success"
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ cart.length === 0 }
        onClick={ () => redirect('/customer/checkout') }
      >
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {totalPrice.toFixed(2).toString().replace('.', ',')}
        </span>
      </Button>
    </div>

  );
}

const mapStateToProps = (state) => ({
  cart: state.productsReducer.products,
});

export default connect(mapStateToProps, null)(SeeCartButton);

SeeCartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
