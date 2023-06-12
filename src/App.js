import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import './scss/styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_USER_SUCCESS } from './redux/actions/userAction';
import Checkouts from './layouts/Checkouts';
import OrderSuccess from './layouts/Checkouts/orderSuccess';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const checkdata = async () => {
        const userLocal = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        const parseUser = JSON.parse(userLocal);

        if (token && parseUser && !user.token) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: { user: parseUser, token },
            });
        }
    };
    useEffect(() => {
        checkdata();
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        // Kiểm tra đường dẫn hiện tại và chuyển hướng nếu là trang Checkout
                        const isCheckoutPage = route.path === '/checkout';
                        if (isCheckoutPage) {
                            return <Route key={index} path={route.path} element={<Checkouts />} />;
                        }
                        const isCheckoutPage2 = route.path === '/checkout/thankyou';
                        if (isCheckoutPage2) {
                            return <Route key={index} path={route.path} element={<OrderSuccess />} />;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
