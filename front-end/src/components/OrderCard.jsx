import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ sales }) {
  const redirect = useNavigate();

  return (
    <div>
      {
        sales.map((sale) => (
          <button
            type="button"
            key={ sale.id }
            onClick={ () => redirect(`/customer/orders/${sale.id}`) }
          >
            <p>
              pedido:
              <span
                data-testid={ `customer_orders__element-order-id-${sale.id}` }
              >
                {sale.id}
              </span>
            </p>
            <p
              data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
            >
              {sale.status}

            </p>
            <p
              data-testid={ `customer_orders__element-order-date-${sale.id}` }
            >
              {sale.saleDate.replace(/T.*/i, '').split('-').reverse().join('/')}

            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${sale.id}` }
            >
              {Number(sale.totalPrice).toFixed(2).toString().replace('.', ',')}
            </p>
          </button>
        ))
      }

    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
