import { FILTERS } from '../type';

const initState = {
  filters: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTERS:
      return {
        ...state,
        filters: payload,
      };
    default:
      return state;
  }
}
