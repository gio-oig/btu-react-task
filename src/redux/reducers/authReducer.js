import * as types from '../action-types/';

const initialState = {
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
      };

    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case types.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return initialState;
  }
};

export default authReducer;
