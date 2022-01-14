import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  RESET_CART,
  UPDATE_PRODUCT_QUANTITY,
} from '../actions';

const INITIAL_STATE = {
  products: [],
};

function productsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case ADD_PRODUCT:
    return {
      ...state,
      products: [...state.products, payload],
    };
  case UPDATE_PRODUCT_QUANTITY:
    return {
      ...state,
      products: state.products.map(
        (product) => (product.id === payload.id ? payload : product),
      ),
    };
  case REMOVE_PRODUCT:
    return {
      ...state,
      products: state.products.filter((product) => product.id !== payload.id),
    };
  case RESET_CART:
    return INITIAL_STATE;
  default:
    return state;
  }
}

export default productsReducer;
