import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        // Thêm các trường dữ liệu khác của giỏ hàng
    },
    reducers: {
        updateCartCount: (state, action) => {
            state.count = action.payload;
        },
        // Thêm các reducer khác để xử lý các action khác của giỏ hàng
    },
});

export const { updateCartCount } = cartSlice.actions;

export default cartSlice.reducer;
