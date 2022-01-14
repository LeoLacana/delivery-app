import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getApi, postApiWithToken } from '../helper/api';

function CheckoutForm({ cart, resetCart }) {
  const redirect = useNavigate();

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [seller, setSeller] = useState('');
  const [allSellers, setAllSellers] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
    getApi('/seller/names', setAllSellers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = cart.reduce(
      (acc, { price, quantity }) => acc + (price * quantity), 0,
    );

    const products = cart.map(({ id, quantity }) => ({ productId: id, quantity }));

    if (!localStorage.getItem('user')) return;

    const { token } = JSON.parse(localStorage.getItem('user'));

    try {
      const response = await postApiWithToken('/customer/checkout', {
        sellerId: seller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: Number(number),
        products,
      }, { headers: { Authorization: token } });

      resetCart();
      redirect(`/customer/orders/${response.saleId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="seller">
        P. Vendedora Responsável
        <select
          name="seller"
          id="responsibleSeller"
          data-testid="customer_checkout__select-seller"
          value={ seller }
          onChange={ (e) => setSeller(e.target.value) }
        >
          <option value=""> </option>
          { allSellers.map(({ id, name }) => (
            <option key={ id } value={ id }>
              {name}
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          name="address"
          value={ address }
          type="text"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setAddress(e.target.value) }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          name="number"
          value={ number }
          type="number"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setNumber(e.target.value) }
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        FINALIZAR PEDIDO
      </button>
      {
        error !== ''
          ? <p>{error}</p>
          : null
      }
    </form>
  );
}

export default CheckoutForm;

CheckoutForm.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  resetCart: PropTypes.func,
}.isRequired;
