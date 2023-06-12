const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

// Thêm sản phẩm mới vào giỏ hàng
export const addToCart = (selectedProduct) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: selectedProduct,
        });
        dispatch(calculateTotalQuantity());

        const { cart } = getState();
        saveCartToLocalStorage(cart.cartItems);
    };
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (itemId, size) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { itemId, size },
        });
        dispatch(calculateTotalQuantity());

        const { cart } = getState();
        saveCartToLocalStorage(cart.cartItems);
    };
};

// Tăng số lượng sản phẩm
export const increaseQuantity = (itemId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'INCREASE_QUANTITY',
            payload: itemId,
        });
        dispatch(calculateTotalQuantity());

        const { cart } = getState();
        saveCartToLocalStorage(cart.cartItems);
    };
};

// Giảm số lượng sản phẩm
export const decreaseQuantity = (itemId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DECREASE_QUANTITY',
            payload: itemId,
        });
        dispatch(calculateTotalQuantity());

        const { cart } = getState();
        saveCartToLocalStorage(cart.cartItems);
    };
};
//Cập nhật thông tin sản phẩm
export const setCartItems = (cartItems) => {
    return {
        type: 'SET_CART_ITEMS',
        payload: cartItems,
    };
};
//Tih tổng số lượng sản phẩm
export const calculateTotalQuantity = () => {
    return (dispatch, getState) => {
        const { cartItems } = getState().cart;
        const totalQuantity = cartItems.reduce((total, item) => {
            const itemQuantity = parseInt(item.quantity);
            if (!isNaN(itemQuantity)) {
                return total + itemQuantity;
            }
            return total;
        }, 0);
        // Lưu giá trị totalQuantity
        localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity || 0));
        dispatch({
            type: 'SET_TOTAL_QUANTITY',
            payload: totalQuantity,
        });
    };
};
//cập nhật lại số lượng
export const setTotalQuantity = (totalQuantity) => {
    return {
        type: 'SET_TOTAL_QUANTITY',
        payload: totalQuantity,
    };
};
