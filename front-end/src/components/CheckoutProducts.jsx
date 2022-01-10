import React from 'react';
import PropTypes from 'prop-types';

function CheckoutProducts({ cart, removeItem }) {
  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + (price * quantity), 0,
  );
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index) => {
              const { name, quantity, price, id } = product;
              return (
                <tr key={ index }>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-name-${index}`
                    }
                  >
                    {name}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    {quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { Number(price).toFixed(2).toString().replace('.', ',')}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    {(Number(price) * quantity).toFixed(2).toString().replace('.', ',')}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                  >
                    <button
                      type="button"
                      onClick={ () => removeItem(id) }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {totalPrice.toFixed(2).toString().replace('.', ',')}
      </p>
    </>
  );
}

export default CheckoutProducts;

CheckoutProducts.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func,
}.isRequired;
