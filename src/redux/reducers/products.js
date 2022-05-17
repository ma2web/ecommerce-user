import { PRODUCT, PRODUCTS } from '../type';

const initState = {
  products: [],
  product: {},
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
}
