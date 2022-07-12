import axios from 'axios';
import { api } from '../api';
import { CATEGORIES, CATEGORY } from '../type';

export const categoryActions = {
  getCategories: () => async (dispatch) => {
    try {
      const response = await axios.get(`${api}/api/categories`);

      dispatch({ type: CATEGORIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getOneCategory: ({id}) => async (dispatch) => {
    try {
      const response = await axios.get(`${api}/api/category/${id}`);

      dispatch({ type: CATEGORY, payload: response.data });
      return response.data
    } catch (error) {
      console.log(error);
    }
  },
};
