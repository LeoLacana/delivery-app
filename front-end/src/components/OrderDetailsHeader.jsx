import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsHeader({ order }) {
  const { id, seller, saleDate, status } = order;

  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {id}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {saleDate}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {seller.name}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status !== 'Em trânsito' }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetailsHeader;

OrderDetailsHeader.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
