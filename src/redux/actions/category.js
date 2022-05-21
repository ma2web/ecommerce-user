import axios from 'axios';
import { api } from '../api';
import { CATEGORIES } from '../type';

export const categoryActions = {
  getCategories: () => async (dispatch) => {
    try {
      const response = await axios.get(`${api}/api/categories`);

      dispatch({ type: CATEGORIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  },
};
