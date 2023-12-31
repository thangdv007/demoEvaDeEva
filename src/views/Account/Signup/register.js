import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '~/components/Breadcrumb';
import { handleRegisterRedux } from '~/redux/actions/register';

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const user = useSelector((state) => state.register.user);

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
        const data = {
            username,
            password,
            lastName,
            firstName,
            email,
            phone,
        };
        dispatch(handleRegisterRedux(data));
    };
    useEffect(() => {
        if (user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <>
            <div className="clear-fix" />
            <main className="container-fluid">
                <div className="layout-ccount">
                    <Breadcrumb pageName="account" currentAcc="register" />
                    <div className="container">
                        <div className="row">
                            <div className="left-page col-md-6 col-lg-6 col-sm-12">
                                <div className="left clearfix">
                                    <h1>Tạo Tài Khoản</h1>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 right-page">
                                <div className="user-box">
                                    <form
                                        acceptCharset="UTF-8"
                                        action=""
                                        id="cre_user"
                                        method=""
                                        onSubmit={handleSignup}
                                    >
                                        <div id="full_name" className="range-form clearfix fn-from row">
                                            <div className="col-lg-6">
                                                <input
                                                    required
                                                    type="text"
                                                    value={lastName}
                                                    name="lastname"
                                                    onChange={handleLastNameChange}
                                                    placeholder="Họ"
                                                    id="last_name"
                                                    className="text h-box"
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
                                                    className="text h-box"
                                                    size="30"
                                                />
                                            </div>
                                        </div>
                                        <div id="email" className="range-form clearfix">
                                            <label htmlFor="email" className="icon-field label">
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
                                                className="input-email-register text r-box"
                                                size="30"
                                            />
                                        </div>
                                        <div id="phone" className="range-form clearfix">
                                            <label htmlFor="phone" className="icon-field label">
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
                                                className="text r-box"
                                                size="10"
                                            />
                                        </div>
                                        <div id="user_name" className="range-form clearfix">
                                            <label htmlFor="user_name" className="icon-field label">
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
                                                className="text r-box"
                                                size="30"
                                            />
                                        </div>
                                        <div id="password" className="range-form clearfix">
                                            <label htmlFor="password" className="icon-field label">
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
                                                className="password text r-box"
                                                size="30"
                                            />
                                        </div>
                                        <div className="login-user clearfix">
                                            <div className="btn-end button dark">
                                                <input className="btn" type="submit" value="Đăng ký" />
                                            </div>
                                        </div>
                                        <div style={{ paddingTop: '15px' }} id="wrap-social-login-plus"></div>
                                        <div className="re-pass clearfix">
                                            <Link className="back-home" to="/">
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
