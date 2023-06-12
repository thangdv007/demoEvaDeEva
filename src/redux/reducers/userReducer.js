import { FETCH_USER_LOGIN, FETCH_USER_ERROR, FETCH_USER_SUCCESS, USER_LOGOUT } from '../actions/userAction';
const INITIAL_STATE = {
    user: {
        username: '',
        auth: null,
        token: '',
    },
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                user: { auth: false },
                isLoading: false,
                isError: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: { user: action.data.user, token: action.data.token, auth: true },
                isLoading: false,
                isError: false,
            };
        case USER_LOGOUT:
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            return {
                ...state,
                user: { email: '', token: '', auth: false },
            };

        default:
            return state;
    }
};

export default userReducer;
