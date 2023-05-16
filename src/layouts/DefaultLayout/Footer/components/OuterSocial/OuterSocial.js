import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '~/assets/Images/Logo';

const cx = classNames.bind(styles);

function OuterSocial() {
    return (
        <div className={cx('outerSocial', 'clear-fix')}>
            <div className={cx('padding-rl-40')}>
                <div className={cx('row')}>
                    <div className={cx('col-sm-4', 'col-md-6')}>
                        <div className={cx('social')}>
                            <ul className={cx('socialIcon')}>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookMessenger} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-sm-8', 'col-md-6')}>
                        <div className={cx('paymentCheckout')}>
                            <ul>
                                <li>
                                    <img src={logo.visa} />
                                </li>
                                <li>
                                    <img src={logo.mastercard} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OuterSocial;
