import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FloatingLabel, Form } from 'react-bootstrap';

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
        <footer id="sectionFooter" className="clear-fix sectionFooter">
            <div className="padding-rl-40 ">
                <div className="innerFooter">
                    <div className="row">
                        {footerItems.map((menuItem) => (
                            <div className="col-footer-two col-sm-12" key={menuItem.id}>
                                <div className="innerMenuFooter">
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
                                    <ul className="collapse show" id={menuItem.id}>
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
                        <div className="col-footer-three col-sm-12">
                            <div className="innerMenuFooter">
                                <div className="footer-signup">
                                    <div className="footer-signup-inner">
                                        <h4 className="noClick">ĐĂNG KÝ NHẬN TIN TỨC VÀ ƯU ĐÃI CỦA EDE</h4>
                                        <div className="contentSubscribe">
                                            <p>
                                                Bằng cách đăng ký, bạn đồng ý với <a href="#">chính sách bảo mật</a> của
                                                chúng tôi.
                                            </p>
                                            <form acceptCharset="UTF-8" action="" id="" method="post">
                                                <div className="newsletter-form">
                                                    <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Nhập email của bạn "
                                                    >
                                                        <Form.Control type="email" placeholder="name@example.com" />
                                                    </FloatingLabel>
                                                    <button className="btnNewsletter" type="submit">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </button>
                                                </div>
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
