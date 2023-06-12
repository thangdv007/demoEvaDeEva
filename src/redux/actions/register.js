import { registerApi } from '~/constants/registerApi';

export const FETCH_REGISTER = 'FETCH_REGISTER';
export const FETCH_REGISTER_ERROR = 'FETCH_REGISTER_ERROR';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';

export const handleRegisterRedux = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_REGISTER });
        let res = await registerApi(data);
        if (res && res.data) {
            dispatch({ type: FETCH_REGISTER_SUCCESS, payload: res.data });
        } else {
            dispatch({ type: FETCH_REGISTER_ERROR });
        }
    };
};
