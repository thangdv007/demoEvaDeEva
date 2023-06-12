import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import registerReducer from './registerReducer';

import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    register: registerReducer,
    cart: cartReducer,
});

export default rootReducer;
