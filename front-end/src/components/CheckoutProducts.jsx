import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CheckoutProducts({ cart, removeItem, page }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cart.reduce(
      (acc, { price, quantity }) => acc + (price * quantity), 0,
    ));
  });
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
            {page === 'checkout' ? <th>Remover Item</th> : null}
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
                      `customer_${page}__element-order-table-item-number-${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `customer_${page}__element-order-table-name-${index}`
                    }
                  >
                    {name}
                  </td>
                  <td
                    data-testid={
                      `customer_${page}__element-order-table-quantity-${index}`
                    }
                  >
                    {quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_${page}__element-order-table-unit-price-${index}`
                    }
                  >
                    { Number(price).toFixed(2).toString().replace('.', ',')}
                  </td>
                  <td
                    data-testid={
                      `customer_${page}__element-order-table-sub-total-${index}`
                    }
                  >
                    {(Number(price) * quantity).toFixed(2).toString().replace('.', ',')}
                  </td>
                  {page === 'checkout' ? (
                    <td
                      data-testid={
                        `customer_${page}__element-order-table-remove-${index}`
                      }
                    >
                      <button
                        type="button"
                        onClick={ () => removeItem(id) }
                      >
                        Remover
                      </button>
                    </td>
                  ) : null}
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {
        page === 'checkout'
          ? (
            <p
              data-testid={ `customer_${page}__element-order-total-price` }
            >
              Total: R$
              {totalPrice.toFixed(2).toString().replace('.', ',')}
            </p>
          ) : (
            <p>
              Total: R$
              <span
                data-testid={ `customer_${page}__element-order-total-price` }
              >
                {totalPrice.toFixed(2).toString().replace('.', ',')}
              </span>
            </p>
          )
      }
    </>
  );
}

export default CheckoutProducts;

CheckoutProducts.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func,
  page: PropTypes.string.isRequired,
};

CheckoutProducts.defaultProps = {
  removeItem: () => {},
};
