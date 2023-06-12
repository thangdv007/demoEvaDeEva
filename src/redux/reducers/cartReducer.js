const initialState = {
    cartItems: [],
    totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (existingProductIndex !== -1) {
                const existingProduct = state.cartItems[existingProductIndex];

                if (existingProduct.size !== action.payload.size) {
                    // Nếu size khác nhau, tạo một cartItem mới với size mới
                    const newCartItem = {
                        ...action.payload,
                    };

                    return {
                        ...state,
                        cartItems: [...state.cartItems, newCartItem],
                    };
                } else {
                    // Nếu sản phẩm đã tồn tại trong giỏ hàng và size giống nhau, cập nhật số lượng
                    const updatedCartItems = [...state.cartItems];
                    updatedCartItems[existingProductIndex].quantity += action.payload.quantity;

                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                }
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào mảng
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload.itemId || item.size !== action.payload.size,
                ),
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
                ),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
                ),
            };
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload,
            };
        case 'SET_TOTAL_QUANTITY':
            return {
                ...state,
                totalQuantity: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
