import { default as React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import { handleLoginRedux } from '~/redux/actions/userAction';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    const user = useSelector((state) => state.user.user);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleHidePasswordRecovery = () => {
        setShowPasswordRecovery(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(handleLoginRedux(username, password));
    };
    useEffect(() => {
        if (user && user.auth === true) {
            navigate('/');
        }
    }, [user]);
    const handleForgotPass = (e) => {
        e.preventDefault();
    };

    //kiểm tra xem showPasswordRecovery có thay đổi để thực hiện các xử lý
    useEffect(() => {
        if (showPasswordRecovery) {
            //Thực hiện các xử lý khi showPassword thay đổi
        } else {
            //Thực hiện các xử lý khi showPasswordRecovery không được chọn
        }
    }, [showPasswordRecovery]);

    return (
        <>
            <div className="clear-fix" />
            <main>
                <div className="layout-account">
                    <Breadcrumb pageName="account" currentAcc="login" />
                    <div className="container">
                        <div className="row">
                            <div className="left-page col-md-6 col-lg-6">
                                <div className="left clearfix">
                                    <h1>Đăng nhập</h1>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 right-page">
                                <div id="user-login">
                                    {showPasswordRecovery ? (
                                        <>
                                            <div style={{ paddingTop: 15 }} id="wrap-social-login-plus"></div>
                                            <div id="recover-password" className="user-box">
                                                <div className="account-type">
                                                    <h2>Phục hồi mật khẩu</h2>
                                                </div>
                                                <form acceptCharset="UTF-8" onSubmit={handleForgotPass}>
                                                    <div className="range-form clearfix">
                                                        <label htmlFor="email" className="icon-field">
                                                            <i className="icon-login icon-envelope" />
                                                        </label>
                                                        <input
                                                            required
                                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                            type="email"
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                            size={30}
                                                            name="email"
                                                            placeholder="Email"
                                                            id="recover-email"
                                                            className="text r-box"
                                                        />
                                                    </div>
                                                    <div className="clearfix login-user">
                                                        <div className="btn-end button dark">
                                                            <input className="btn" type="submit" value="Gửi" />
                                                        </div>
                                                        <div className="re-pass">
                                                            <Link
                                                                to=""
                                                                onClick={(event) => {
                                                                    event.preventDefault();
                                                                    handleHidePasswordRecovery();
                                                                }}
                                                            >
                                                                Hủy
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </>
                                    ) : (
                                        <div id="login" className="user-box">
                                            <div className="account-type">
                                                <h2 className="title"> </h2>
                                            </div>
                                            <form acceptCharset="UTF-8" onSubmit={handleLogin} id="user_login">
                                                <div className="range-form clearfix">
                                                    <label htmlFor="user_name" className="icon-field">
                                                        <i className="icon-login icon-envelope" />
                                                    </label>
                                                    <input
                                                        required
                                                        //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                        type="text"
                                                        value={username}
                                                        onChange={handleNameChange}
                                                        name="username"
                                                        id="user_name"
                                                        placeholder="Tài Khoản"
                                                        className="text r-box"
                                                    />
                                                </div>
                                                <div className="range-form clearfix">
                                                    <label htmlFor="user_password" className="icon-field">
                                                        <i className="icon-login icon-envelope" />
                                                    </label>
                                                    <input
                                                        required
                                                        type="password"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                        name="userpassword"
                                                        id="user_password"
                                                        placeholder="Mật khẩu"
                                                        className="text r-box"
                                                        size={16}
                                                    />
                                                </div>
                                                {isError && (
                                                    <div className="text-danger">
                                                        Đăng nhập thất bại, vui lòng thử lại !
                                                    </div>
                                                )}
                                                <div className="clearfix login-user">
                                                    <div className="btn-end button dark">
                                                        {isLoading && <i className="fas fa-spinner fa-pulse"></i>}
                                                        &nbsp;
                                                        <input
                                                            className="btn btn-signin"
                                                            type="submit"
                                                            value="Đăng nhập"
                                                        />
                                                    </div>

                                                    <div className="re-pass">
                                                        <Link
                                                            to=""
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                handleShowPasswordRecovery();
                                                            }}
                                                        >
                                                            Quên mật khẩu?
                                                        </Link>
                                                        <br />
                                                        hoặc{' '}
                                                        <Link to="/signup" title="Đăng ký">
                                                            Đăng ký
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
