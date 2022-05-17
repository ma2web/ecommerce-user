import { PRODUCTS } from '../type';

const initState = {
  products: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}
