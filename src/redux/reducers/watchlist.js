
const initState = {
  list: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'WATCHLIST_GET_ALL':
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}
