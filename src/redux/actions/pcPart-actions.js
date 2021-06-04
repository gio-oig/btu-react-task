import { getPcparts } from '../../components/services';
import * as types from '../action-types';

export const fetchPcParts = () => async (dispatch) => {
  try {
    dispatch({ type: types.PCPARTS_REQUEST });

    const data = await getPcparts();

    dispatch({ type: types.PCPARTS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.PCPARTS_REQUEST_FAIL, payload: error.data });
  }
};
