import axios from 'axios';
import { api } from '../api';
import { FILTERS } from '../type';

export const filterActions = {
  getByCategory:
    ({ id }) =>
    async (dispatch) => {
      try {
        const response = await axios.get(`${api}/api/filter/category/${id}`);

        dispatch({ type: FILTERS, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    },
};
