import config from '~/config';

import Home from '~/pages/Home';
import SignupPage from '~/pages/Signup';
import AccountPage from '~/pages/Account';
import LoginPage from '~/pages/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: LoginPage },
    { path: config.routes.account, component: AccountPage },
    { path: config.routes.signup, component: SignupPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
