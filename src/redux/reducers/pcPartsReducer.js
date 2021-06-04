import * as types from '../action-types/';

const initialState = {
  user: null,
  error: null,
};

export const pcPartsReducer = (state = initialState, action) => {
  switch (state.type) {
    case types.PCPARTS_REQUEST:
      return {
        loading: true,
      };
    case types.PCPARTS_REQUEST_SUCCESS:
      return {
        loading: false,
        pcParts: state.payload,
      };
    case types.PCPARTS_REQUEST_FAIL:
      return {
        errro: action.payload,
      };
    default:
      return initialState;
  }
};
