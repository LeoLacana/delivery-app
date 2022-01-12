import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  addProductAction,
  removeProductAction,
  updateQuantityAction,
} from '../redux/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import CardButtons from './CardButtons';

function ProductCard({ product, cart, addToCart, removeFromCart, updateQuantity }) {
  const { id, name, price, url_image: urlImage } = product;

  const productIsInCart = cart.find((cartItem) => cartItem.id === id);
  const productQuantity = productIsInCart ? productIsInCart.quantity : 0;

  const [quantity, setQuantity] = useState(productQuantity);

  function handleQuantityButton(newValue) {
    const newQuantity = Number(newValue);
    const oldQuantity = quantity;

    if (newQuantity < 0) return;

    setQuantity(newQuantity);

    if (newQuantity === 0) {
      return removeFromCart(id);
    }

    if (oldQuantity === 0) {
      return addToCart({ ...product, quantity: newQuantity });
    }

    updateQuantity({ ...product, quantity: newQuantity });
  }

  return (
    <>
      <Card key={ id } style={ { width: '18rem' } }>
        <Card.Img
          src={ urlImage }
          alt={ name }
          variant="top"
          style={ {
            width: 'auto',
            height: 'auto',
            maxHeight: '280px',
          } }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <Card.Body>
          <Card.Title
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}

          </Card.Title>
          <Card.Text>
            {/* <img
              src={ urlImage }
              alt={ name }
              style={ { height: '100px' } }
              data-testid={ `customer_products__img-card-bg-image-${id}` }
            /> */}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            R$
            <span
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              {Number(price).toFixed(2).toString().replace('.', ',')}
            </span>
          </ListGroupItem>
          <ListGroupItem>
            <CardButtons
              id={ id }
              quantity={ quantity }
              handleQuantityButton={ handleQuantityButton }
            />
          </ListGroupItem>
        </ListGroup>
      </Card>
      {/* <div key={ id }>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {Number(price).toFixed(2).toString().replace('.', ',')}
        </p>
        <img
          src={ urlImage }
          alt={ name }
          style={ { height: '100px' } }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => handleQuantityButton(quantity - 1) }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            min="0"
            onChange={ (e) => handleQuantityButton(e.target.value) }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => handleQuantityButton(quantity + 1) }
          >
            +
          </button>
        </div>
      </div> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addProductAction(payload)),
  removeFromCart: (payload) => dispatch(removeProductAction(payload)),
  updateQuantity: (payload) => dispatch(updateQuantityAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

ProductCard.propTypes = {
  product: {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object),
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  updateQuantity: PropTypes.func,
}.isRequired;
