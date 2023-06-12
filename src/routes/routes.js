import config from '~/config';

import Home from '~/views/Home';
import Login from '~/views/Account/Login/login';
import Account from '~/views/Account/Account/Account';
import Signup from '~/views/Account/Signup/register';
import Cart from '~/views/Cart/cart';
import ProductPage from '~/views/ProductPage';
import Campain from '~/views/Campain';
import ProductDetails from '~/views/ProductDetails';
import Checkouts from '~/layouts/Checkouts';
import OrderSuccess from '~/layouts/Checkouts/orderSuccess';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.account, component: Account },
    { path: config.routes.signup, component: Signup },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.productPage, component: ProductPage },
    { path: config.routes.campaign, component: Campain },
    { path: config.routes.productDetails, component: ProductDetails },
    { path: config.routes.checkout, component: Checkouts },
    { path: config.routes.thankyou, component: OrderSuccess },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
