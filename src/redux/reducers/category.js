import { CATEGORIES, CATEGORY } from '../type';

const initState = {
  categories: [],
  category: {},
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
}
