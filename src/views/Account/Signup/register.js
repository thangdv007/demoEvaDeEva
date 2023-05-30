import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from '../LoginSignup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, setCurrentUser } from '~/redux/userSlice';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSignup = (event) => {
        event.preventDefault();
        setErrorMessage('');
        const user = {
            username,
            password,
            lastName,
            firstName,
            email,
            phone,
        };
        dispatch(register(user))
            .then((result) => {
                if (!result.error) {
                    // Đăng nhập thành công, chuyển hướng về trang chủ
                    navigate('/login');
                    dispatch(setCurrentUser(result.payload)); // Cập nhật currentUser trong Redux store
                } else {
                    console.log(errorMessage);
                    // Có lỗi xảy ra trong quá trình đăng nhập
                    setErrorMessage(result.error.message);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <>
            <div className={cx('clear-fix')} />
            <main className={cx('container-fluid')}>
                <div className={cx('layout-ccount')}>
                    <Breadcrumb pageName="account" currentAcc="register" />
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('left-page', 'col-md-6', 'col-lg-6', 'col-sm-12')}>
                                <div className={cx('left', 'clearfix')}>
                                    <h1>Tạo Tài Khoản</h1>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6', 'col-lg-6', 'right-page')}>
                                <div className={cx('user-box')}>
                                    <form
                                        acceptCharset="UTF-8"
                                        action=""
                                        id="cre_user"
                                        method=""
                                        onSubmit={handleSignup}
                                    >
                                        <div id="full_name" className={cx('range-form', 'clearfix', 'fn-from', 'row')}>
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    type="text"
                                                    value={lastName}
                                                    name="lastname"
                                                    onChange={handleLastNameChange}
                                                    placeholder="Họ"
                                                    id="last_name"
                                                    className={cx('text', 'h-box')}
                                                    size="30"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    type="text"
                                                    value={firstName}
                                                    name="firstname"
                                                    onChange={handleFirstNameChange}
                                                    placeholder="Tên"
                                                    id="first_name"
                                                    className={cx('text', 'h-box')}
                                                    size="30"
                                                />
                                            </div>
                                        </div>
                                        <div id="email" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="email" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-envelope "></i>
                                            </label>
                                            <input
                                                required
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                type="email"
                                                value={email}
                                                placeholder="Email"
                                                onChange={handleEmailChange}
                                                name="user_email"
                                                id="email"
                                                className={cx('input-email-register', 'text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div id="phone" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="phone" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-phone "></i>
                                            </label>
                                            <input
                                                required
                                                pattern="0[0-9]{9}"
                                                type="phone"
                                                value={phone}
                                                name="userphone"
                                                onChange={handlePhoneChange}
                                                placeholder="Số điện thoại"
                                                title="Số điện thoại phải bắt đầu bằng số 0 và có 10 số"
                                                id="phone"
                                                className={cx('text', 'r-box')}
                                                size="10"
                                            />
                                        </div>
                                        <div id="user_name" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="user_name" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-user "></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value={username}
                                                name="username"
                                                placeholder="Tài Khoản"
                                                onChange={handleNameChange}
                                                id="user_name"
                                                className={cx('text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div id="password" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="password" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-shield "></i>
                                            </label>
                                            <input
                                                required
                                                type="password"
                                                value={password}
                                                placeholder="Mật khẩu"
                                                name="userpassword"
                                                onChange={handlePasswordChange}
                                                id="password"
                                                className={cx('password', 'text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div className={cx('login-user', 'clearfix')}>
                                            <div className={cx('btn-end', 'button', 'dark')}>
                                                <input className={cx('btn')} type="submit" value="Đăng ký" />
                                            </div>
                                        </div>
                                        <div style={{ paddingTop: '15px' }} id="wrap-social-login-plus"></div>
                                        <div className={cx('re-pass', 'clearfix')}>
                                            <Link className={cx('back-home')} to="/">
                                                <FontAwesomeIcon icon={faLeftLong} /> Quay lại trang chủ
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signup;
