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
  const { id, name, price, urlImage } = product;

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
    <Card key={ id } style={ { width: '18rem' } }>
      <Card.Img
        src={ urlImage }
        alt={ name }
        variant="top"
        style={ {
          width: 'auto',
          height: 'auto',
          maxHeight: '250px',
          objectFit: 'contain',
        } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `customer_products__element-card-title-${id}` }
          style={ {
            height: '35px',
            textAlign: 'center',
          } }
        >
          {name}

        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem
          style={ {
            textAlign: 'center',
          } }
        >
          R$
          <span
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            {` ${Number(price).toFixed(2).toString().replace('.', ',')}`}
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
