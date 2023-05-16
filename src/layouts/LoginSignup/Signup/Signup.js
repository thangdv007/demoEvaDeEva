import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from '../LoginSignup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <>
            <div className={cx('clear-ix')} />
            <main className={cx('container-fluid')}>
                <div className={cx('layout-ccount')}>
                    <div className={cx('padding-rl-40')}>
                        <div style={{ backgroundColor: '#ededed' }}>
                            <nav aria-label="breadcrumb">
                                <ol className={clsx('breadcrumb')} style={{ padding: '10px' }}>
                                    <li className={clsx('breadcrumb-item')}>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className={clsx('breadcrumb-item')}>
                                        <Link to="">Tài khoản</Link>
                                    </li>
                                    <li className={clsx('breadcrumb-item', styles.active)} aria-current="page">
                                        Đăng ký
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('left-page', 'col-md-6', 'col-lg-6', 'col-sm-12')}>
                                <div className={cx('left', 'clearfix')}>
                                    <h1>Tạo Tài Khoản</h1>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6', 'col-lg-6', 'right-page')}>
                                <div className={cx('user-box')}>
                                    <form acceptCharset="UTF-8" action="" id="cre_user" method="post">
                                        <div id="last_name" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="last_name" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-user "></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value=""
                                                name="userlastname"
                                                placeholder="Họ"
                                                id="last_name"
                                                className={cx('text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div id="first_name" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="first_name" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-user "></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value=""
                                                name="userfirstname"
                                                placeholder="Tên"
                                                id="first_name"
                                                className={cx('text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div id="phone" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="phone" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-phone "></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value=""
                                                name="userphone"
                                                placeholder="Số điện thoại"
                                                id="phone"
                                                className={cx('text', 'r-box')}
                                                size="30"
                                            />
                                        </div>
                                        <div id="email" className={cx('range-form', 'clearfix')}>
                                            <label htmlFor="email" className={cx('icon-field', 'label')}>
                                                <i className="icon-login icon-envelope "></i>
                                            </label>
                                            <input
                                                required
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                type="email"
                                                value=""
                                                placeholder="Email"
                                                name="user_email"
                                                id="email"
                                                className={cx('input-email-register', 'text', 'r-box')}
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
                                                value=""
                                                placeholder="Mật khẩu"
                                                name="userpassword"
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
