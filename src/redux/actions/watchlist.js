import axios from 'axios';
import { api } from '../api';

const { token } = JSON.parse(localStorage?.getItem('user'));

export const watchlistActions = {
  getAll: () => async (dispatch) => {
    try {
      const response = await axios.get(`${api}/api/user/watchlist/list`, {
        headers: {
          "x-auth-token": token,
        },
      });

      dispatch({ type: 'WATCHLIST_GET_ALL', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  addToWatchlist:
    ({ productId }) =>
    async (dispatch) => {
      try {
        const response = await axios.post(`${api}/api/user/watchlist/add`, { productId }, {
          headers: {
            "x-auth-token": token,
          },
        });

        // dispatch({ type: PRODUCT, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    },
    removeFromWatchlist:
    ({ id }) =>
    async (dispatch) => {
      try {
        const response = await axios.get(`${api}/api/user/watchlist/remove`);

        // dispatch({ type: PRODUCTS, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    },
};
