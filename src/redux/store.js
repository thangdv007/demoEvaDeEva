import { configureStore } from '@reduxjs/toolkit';
import authReducer from './userSlice';
import cartReducer from './countCart';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    },
});

export default store;
