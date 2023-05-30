import config from '~/config';

import Home from '~/views/Home';
import Login from '~/views/Account/Login/login';
import Account from '~/views/Account/Account/Account';
import Signup from '~/views/Account/Signup/register';
import Cart from '~/views/Cart/cart';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.account, component: Account },
    { path: config.routes.signup, component: Signup },
    { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
