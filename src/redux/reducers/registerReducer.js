import { FETCH_REGISTER, FETCH_REGISTER_ERROR, FETCH_REGISTER_SUCCESS } from '../actions/register';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    isError: false,
};

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REGISTER:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_REGISTER_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            };
        case FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isError: false,
            };
        default:
            return state;
    }
};
export default registerReducer;
