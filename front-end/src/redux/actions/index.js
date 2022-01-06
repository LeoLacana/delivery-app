export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProductAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
