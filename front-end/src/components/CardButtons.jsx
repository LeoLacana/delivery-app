import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const buttonCardStyle = {
  display: 'flex',
};

const inputStyle = {
  width: '80%',
};

const buttonStyle = {
  margin: '0 7px',
};

function CardButtons({ handleQuantityButton, id, quantity }) {
  return (
    <div style={ buttonCardStyle }>
      <Button
        variant="danger"
        style={ buttonStyle }
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => handleQuantityButton(quantity - 1) }
      >
        -
      </Button>
      <input
        style={ inputStyle }
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        min="0"
        onChange={ (e) => handleQuantityButton(e.target.value) }
      />
      <Button
        variant="success"
        style={ buttonStyle }
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => handleQuantityButton(quantity + 1) }
      >
        +
      </Button>
    </div>
  );
}

export default CardButtons;

CardButtons.propTypes = {
  handleQuantityButton: PropTypes.func,
}.isRequired;
