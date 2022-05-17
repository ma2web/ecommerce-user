import axios from 'axios';
import { api } from '../api';
import { PRODUCT, PRODUCTS } from '../type';

export const productActions = {
  getProducts: () => async (dispatch) => {
    try {
      const response = await axios.get(`${api}/api/products`);

      dispatch({ type: PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getProduct:
    ({ id }) =>
    async (dispatch) => {
      try {
        const response = await axios.get(`${api}/api/product/${id}`);

        dispatch({ type: PRODUCT, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    },
};
