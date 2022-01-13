import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderUsers from '../components/HeaderUsers';
import CheckoutProducts from '../components/CheckoutProducts';
import { removeProductAction } from '../redux/actions';
import CheckoutForm from '../components/CheckoutForm';

function Checkout({ cart, removeItem }) {
  return (
    <>
      <HeaderUsers />
      <CheckoutProducts cart={ cart } removeItem={ removeItem } />
      <CheckoutForm cart={ cart } />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (value) => dispatch(removeProductAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func,
}.isRequired;
