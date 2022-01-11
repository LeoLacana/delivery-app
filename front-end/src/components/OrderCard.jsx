import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ sales }) {
  return (
    <div>
      {
        sales.map((sale) => (
          <div
            key={ sale.id }
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
              {sale.sale_date}

            </p>
            <p>{sale.total_price}</p>
          </div>
        ))
      }

    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
