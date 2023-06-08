import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import './scss/styles.scss';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/userSlice';

function App() {
    const dispatch = useDispatch();
    const checkdata = async () => {
        const user = localStorage.getItem('infoUser');
        const token = localStorage.getItem('token');
        const parseUser = JSON.parse(user);
        const parseToken = JSON.parse(token);
        dispatch(setCurrentUser({ token: parseToken, user: parseUser }));
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
