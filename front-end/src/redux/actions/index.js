export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const RESET_CART = 'RESET_CART';

export const addProductAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateQuantityAction = (product) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: product,
});

export const removeProductAction = (id) => ({
  type: REMOVE_PRODUCT,
  payload: { id },
});

export const resetCartAction = () => ({
  type: RESET_CART,
});
