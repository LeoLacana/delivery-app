import {
  ADD_PRODUCT,
} from '../actions';

const INITIAL_STATE = {
  products: [],
  // loading: false,
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_PRODUCT:
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  default:
    return state;
  }
}

// case RECEIVING_PRODUCTS:
//   return {
//     ...state,
//     loading: true,
//   };
// case RECEIVED_PRODUCTS:
//   return {
//     ...state,
//     loading: false,
//   };

export default productsReducer;
