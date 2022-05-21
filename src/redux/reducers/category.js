import { CATEGORIES } from '../type';

const initState = {
  categories: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
}
