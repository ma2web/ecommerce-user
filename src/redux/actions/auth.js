import axios from 'axios';
import { api } from '../api';

const user =
  localStorage?.getItem('user') && JSON.parse(localStorage?.getItem('user'));

export const authActions = {
  login:
    ({ body }) =>
    async (dispatch) => {
      console.log(body);
      try {
        const response = await axios.post(`${api}/api/user/user-login`, body);

        return response.data;
      } catch (error) {
        console.log(error);
        return error.response;
      }
    },
  register:
    ({ body }) =>
    async (dispatch) => {
      try {
        const response = await axios.post(`${api}/api/user/user-register`, {
          ...body,
          role: 'user',
        });

        return response.data;
      } catch (error) {
        console.log(error);
        return error.response;
      }
    },
  updateProfile:
    ({ body, id }) =>
    async (dispatch) => {
      try {
        const response = await axios.put(
          `${api}/api/user/${id}`,
          {
            ...body,
          },
          {
            headers: {
              'x-auth-token': user.token,
            },
          }
        );

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
};
