import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpRequest from '~/utils/httpRequest';

export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
    try {
        // Gọi API đăng nhập
        const response = await httpRequest.post('api/login', credentials);

        const { user, accessToken } = response.data;

        dispatch(setCurrentUser(user, accessToken));

        return user;
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
        // console.log('responseData', response.data);

        const { user, accessToken } = response.data;

        dispatch(setCurrentUser(user, accessToken));

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
export const logout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem('jwtToken');
    //Xóa token khỏi localStorage
    localStorage.removeItem('currentUser');
};

const saveCurrentUser = localStorage.getItem('currentUser');

const initialState = {
    currentUser: saveCurrentUser ? saveCurrentUser : null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                // Cập nhật currentUser trong Redux store
                state.currentUser = action.payload;
                localStorage.setItem('currentUser', action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
                localStorage.setItem('currentUser', action.payload);
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
