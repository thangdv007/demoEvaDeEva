import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpRequest from '~/utils/httpRequest';

export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
        // Gọi API đăng nhập
        const response = await httpRequest.post('api/login', credentials);
        const data = response.data;
        localStorage.setItem('infoUser', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
        dispatch(setCurrentUser({ token: data.token, user: data.user }));
        return data;
    } catch (error) {
        // In ra lỗi để debug
        console.log(error);
        // Xử lý lỗi nếu có
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Lỗi xảy ra trong quá trình đăng nhập');
        }
    }
});
export const register = createAsyncThunk('auth/register', async (userData, { dispatch }) => {
    try {
        // Gọi API đăng ký
        const response = await httpRequest.post('api/register', userData);

        const user = response.data;

        return user;
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            console.log('lỗi');
            throw new Error('Lỗi xảy ra trong quá trình đăng ký');
        }
    }
});
export const logout = createAsyncThunk('', (userData, { dispatch }) => {
    try {
        localStorage.setItem('infoUser', null);
        localStorage.setItem('token', '');
        dispatch(setCurrentUser({ token: '', user: null }));
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    currentUser: null,
    token: '',
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
