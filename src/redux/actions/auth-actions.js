import { login } from '../../components/services/auth';
import * as types from '../action-types';

export const loginUser = (inputData) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });

    const data = await login(inputData);

    dispatch({ type: types.LOGIN_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.LOGIN_REQUEST_FAIL, payload: error.data });
  }
};
