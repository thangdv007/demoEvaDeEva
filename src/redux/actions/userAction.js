import { loginApi } from '~/constants/userApi';
export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const USER_LOGOUT = 'USER_LOGOUT';

export const handleLoginRedux = (username, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });

        let res = await loginApi(username, password);
        if (res && res.data.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: { user: res.data.user, token: res.data.token },
            });
        } else {
            if (res && res.status === 400) {
                console.log(res.response.data);
            }
            dispatch({ type: FETCH_USER_ERROR });
        }
    };
};
export const handleLogoutRedux = () => {
    return (dispatch, getState) => {
        localStorage.setItem('user', null);
        localStorage.setItem('token', '');
        dispatch({
            type: USER_LOGOUT,
        });
    };
};
