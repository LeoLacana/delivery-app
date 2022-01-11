import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import api from '../helper/api';

const fetchApi = async (route, setState) => {
  const { data } = await api.get(route);

  setState(data);
};

function CheckoutForm({ cart }) {
  const redirect = useNavigate();

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [seller, setSeller] = useState('');
  const [allSellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetchApi('/seller/names', setAllSellers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = cart.reduce(
      (acc, { price, quantity }) => acc + (price * quantity), 0,
    );

    if (!localStorage.getItem('user')) return;

    const { token } = JSON.parse(localStorage.getItem('user'));

    try {
      const response = await api.post('/customer/checkout', {
        seller_id: seller,
        total_price: totalPrice,
        delivery_address: address,
        delivery_number: number,
        products: cart,
      }, { headers: { Authorization: token } });

      redirect(`/customer/order/${response.data.saleId}`);
    } catch (err) {
      alert(err.message);
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
    </form>
  );
}

export default CheckoutForm;

CheckoutForm.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
