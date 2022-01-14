import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const inputStyle = {
  width: '80%',
};

const buttonStyle = {
  margin: '0 7px',
};

function CardButtons({ handleQuantityButton, id, quantity }) {
  return (
    <>
      <button
        style={ buttonStyle }
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => handleQuantityButton(quantity - 1) }
      >
        -
      </button>
      <input
        style={ inputStyle }
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        min="0"
        onChange={ (e) => handleQuantityButton(e.target.value) }
      />
      <button
        style={ buttonStyle }
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => handleQuantityButton(quantity + 1) }
      >
        +
      </button>
    </>
  );
}

export default CardButtons;

CardButtons.propTypes = {
  handleQuantityButton: PropTypes.func,
}.isRequired;
