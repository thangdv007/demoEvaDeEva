import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from '../LoginSignup.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Xử lý đăng nhập
    };

    const handleShowPasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleHidePasswordRecovery = () => {
        setShowPasswordRecovery(false);
    };

    return (
        <>
            <div className={cx('clear-fix')} />
            <main>
                <div className={cx('layout-account')}>
                    <div className={cx('padding-rl-40')}>
                        <div style={{ backgroundColor: '#ededed' }}>
                            <nav aria-label="breadcrumb">
                                <ol className={clsx('breadcrumb')} style={{ padding: 10 }}>
                                    <li className={clsx('breadcrumb-item')}>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className={clsx('breadcrumb-item')}>
                                        <Link to="">Tài khoản</Link>
                                    </li>
                                    <li className={clsx('breadcrumb-item', styles.active)} aria-current="page">
                                        Đăng nhập
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('left-page', 'col-md-6', 'col-lg-6')}>
                                <div className={cx('left', 'clearfix')}>
                                    <h1>Đăng nhập</h1>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6', 'col-lg-6', 'right-page')}>
                                <div id="user-login">
                                    {showPasswordRecovery ? (
                                        <>
                                            <div style={{ paddingTop: 15 }} id="wrap-social-login-plus"></div>
                                            <div id="recover-password" className={cx('user-box')}>
                                                <div className={cx('account-type')}>
                                                    <h2>Phục hồi mật khẩu</h2>
                                                </div>
                                                <form acceptCharset="UTF-8" onSubmit={handleFormSubmit}>
                                                    <div className={cx('range-form', 'clearfix')}>
                                                        <label htmlFor="email" className={cx('icon-field')}>
                                                            <i className={cx('icon-login', 'icon-envelope')} />
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
                                                            className={cx('text', 'r-box')}
                                                        />
                                                    </div>
                                                    <div className={cx('clearfix', 'login-user')}>
                                                        <div className={cx('btn-end', 'button', 'dark')}>
                                                            <input className={cx('btn')} type="submit" value="Gửi" />
                                                        </div>
                                                        <div className={cx('re-pass')}>
                                                            <a
                                                                href="#"
                                                                onClick={(event) => {
                                                                    event.preventDefault();
                                                                    handleHidePasswordRecovery();
                                                                }}
                                                            >
                                                                Hủy
                                                            </a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </>
                                    ) : (
                                        <div id="login" className={cx('user-box')}>
                                            <div className={cx('account-type')}>
                                                <h2 className={cx('title')} />
                                            </div>
                                            <form acceptCharset="UTF-8" onSubmit={handleFormSubmit} id="user_login">
                                                <div className={cx('range-form', 'clearfix')}>
                                                    <label htmlFor="user_email" className={cx('icon-field')}>
                                                        <i className={cx('icon-login', 'icon-envelope')} />
                                                    </label>
                                                    <input
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                        type="email"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                        name="useremail"
                                                        id="user_email"
                                                        placeholder="Email"
                                                        className={cx('text', 'r-box')}
                                                    />
                                                </div>
                                                <div className={cx('range-form', 'clearfix')}>
                                                    <label htmlFor="user_password" className={cx('icon-field')}>
                                                        <i className={cx('icon-login', 'icon-envelope')} />
                                                    </label>
                                                    <input
                                                        required
                                                        type="password"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                        name="userpassword"
                                                        id="user_password"
                                                        placeholder="Mật khẩu"
                                                        className={cx('text', 'r-box')}
                                                        size={16}
                                                    />
                                                </div>
                                                <div className={cx('clearfix', 'login-user')}>
                                                    <div className={cx('btn-end', 'button', 'dark')}>
                                                        <input
                                                            className={cx('btn', 'btn-signin')}
                                                            type="submit"
                                                            value="Đăng nhập"
                                                        />
                                                    </div>
                                                    <div className={cx('re-pass')}>
                                                        <a
                                                            href="#"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                handleShowPasswordRecovery();
                                                            }}
                                                        >
                                                            Quên mật khẩu?
                                                        </a>
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
