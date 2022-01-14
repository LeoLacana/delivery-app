import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderUsers from '../components/HeaderUsers';
import CheckoutProducts from '../components/CheckoutProducts';
import { removeProductAction, resetCartAction } from '../redux/actions';
import CheckoutForm from '../components/CheckoutForm';

function Checkout({ cart, removeItem, resetCart }) {
  return (
    <>
      <HeaderUsers />
      <CheckoutProducts cart={ cart } removeItem={ removeItem } page="checkout" />
      <CheckoutForm cart={ cart } resetCart={ resetCart } />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (value) => dispatch(removeProductAction(value)),
  resetCart: () => dispatch(resetCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func,
  resetCart: PropTypes.func,
}.isRequired;
