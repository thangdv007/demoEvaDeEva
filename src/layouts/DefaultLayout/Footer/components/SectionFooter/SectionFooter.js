import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SectionFooter() {
    const footerItems = [
        {
            title: 'Tuyển dụng',
            id: 'collapseExample',
            submenuItems: [
                {
                    title: 'Tuyển dụng Tháng 04.2023',
                    to: '/',
                },
            ],
        },
        {
            title: 'Khám phá EDE',
            id: 'collapseExample2',
            submenuItems: [
                {
                    title: 'Về chúng tôi',
                    to: '/',
                },
                {
                    title: 'Câu hỏi thường gặp',
                    to: '/',
                },
                {
                    title: 'Tin Tức',
                    to: '/',
                },
                {
                    title: 'Sự kiện',
                    to: '/',
                },
                {
                    title: 'SAO & Eva',
                    to: '/',
                },
                {
                    title: 'Mix & Match',
                    to: '/',
                },
            ],
        },
        {
            title: 'Chính sách',
            id: 'collapseExample3',
            submenuItems: [
                {
                    title: 'Chính sách thanh toán',
                    to: '/',
                },
                {
                    title: 'Chính sách vận chuyển',
                    to: '/',
                },
                {
                    title: 'Chính sách bảo mật',
                    to: '/',
                },
                {
                    title: 'Chương trình thẻ VIP',
                    to: '/',
                },
                {
                    title: 'Hướng dẫn chọn size',
                    to: '/',
                },
            ],
        },
    ];

    return (
        <footer id="sectionFooter" className={cx('clear-fix', 'sectionFooter')}>
            <div className={cx('padding-rl-40')}>
                <div className={cx('innerFooter')}>
                    <div className={cx('row')}>
                        {footerItems.map((menuItem) => (
                            <div className={cx('col-footer-two', 'col-sm-12')} key={menuItem.id}>
                                <div className={cx('innerMenuFooter')}>
                                    <h4
                                        data-bs-toggle="collapse"
                                        role="button"
                                        data-bs-target={`#${menuItem.id}`}
                                        aria-expanded="true"
                                        aria-controls={menuItem.id}
                                    >
                                        {menuItem.title}
                                        <i />
                                    </h4>
                                    <ul className={cx('collapse', 'show')} id={menuItem.id}>
                                        {menuItem.submenuItems.map((submenuItem, index) => (
                                            <li key={index}>
                                                <Link to={submenuItem.to} title={submenuItem.title}>
                                                    {submenuItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className={cx('col-footer-three', 'col-sm-12')}>
                            <div className={cx('innerMenuFooter')}>
                                <div className={cx('footer-signup')}>
                                    <div className={cx('footer-signup-inner')}>
                                        <h4 className={cx('noClick')}>ĐĂNG KÝ NHẬN TIN TỨC VÀ ƯU ĐÃI CỦA EDE</h4>
                                        <div className={cx('contentSubscribe')}>
                                            <p>
                                                Bằng cách đăng ký, bạn đồng ý với <a href="#">chính sách bảo mật</a> của
                                                chúng tôi.
                                            </p>
                                            <form acceptCharset="UTF-8" action="" id="" method="post">
                                                <div className={cx('newsletter-form')}>
                                                    <input
                                                        required=""
                                                        type="email"
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                        name="email"
                                                        id="emailSubscribe"
                                                        className={cx(
                                                            'emailSubscribe',
                                                            'newsletter-input',
                                                            'form-control',
                                                            'input-lg',
                                                        )}
                                                    />
                                                    <label htmlFor="email" className={cx('f-input')}>
                                                        Nhập email của bạn
                                                    </label>
                                                    <button className={cx('btnNewsletter')} type="submit">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </button>
                                                </div>
                                                <input id="" name="" type="hidden" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SectionFooter;
