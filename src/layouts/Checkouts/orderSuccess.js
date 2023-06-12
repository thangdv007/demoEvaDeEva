import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { SvgComponent2 } from '~/assets/SVG';
import Button from '~/components/Button/Button';
import OrderInfo from './components/orderInfo';

function OrderSuccess() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate(`/collections/${'SẢN PHẨM'}`);
    };
    return (
        <div className="content-chkt">
            <Row lg={12} className="wrap-chkt">
                <Col className="main-chkt">
                    <div className="main-header-chkt">
                        <Link to="/" className="logo-chkt">
                            <h1 className="logo-text-chkt">Eva De Eva</h1>
                        </Link>
                    </div>
                    <div className="main-content">
                        <div>
                            <div className="section">
                                <div className="section-header os-header">
                                    <SvgComponent2 />
                                    <div className="os-header-heading">
                                        <h2 className="os-header-title">Đặt hàng thành công</h2>
                                        <span className="os-order-number">Mã đơn hàng #561751</span>
                                        <span className="os-description">Cám ơn bạn đã mua hàng!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="section thank-you-checkout-info">
                                <div className="section-content">
                                    <div className="content-box">
                                        <div className="content-box-row content-box-row-padding content-box-row-no-border">
                                            <h2>Thông tin đơn hàng</h2>
                                        </div>
                                        <div className="content-box-row content-box-row-padding">
                                            <div className="section-content">
                                                <div className="section-content-column">
                                                    <h3>Thông tin giao hàng</h3>
                                                    Nguyễn Kim Thăng
                                                    <br />
                                                    0958474814
                                                    <br />
                                                    <p>
                                                        Nguyệt Đức, Yên Lạc
                                                        <br />
                                                        Xã Tân Hiệp
                                                        <br />
                                                        Huyện Hóc Môn
                                                        <br />
                                                        Hồ Chí Minh
                                                        <br />
                                                        Vietnam
                                                        <br />
                                                    </p>
                                                    <h3>Phương thức thanh toán</h3>
                                                    <p>Thanh toán khi giao hàng (COD)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="step-footer">
                                <Button complete className="btn-done" onClick={handleContinueShopping}>
                                    <span className="btn-content">Tiếp tục mua hàng</span>
                                </Button>
                                <p className="step-footer-info">
                                    <i className="icon icon-os-question" />
                                    <span>
                                        Cần hỗ trợ? <Link href="mailto:thangdv007@gmail.com">Liên hệ chúng tôi</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="side-bar-chkt">
                    <OrderInfo currentPage={false} />
                </Col>
            </Row>
        </div>
    );
}

export default OrderSuccess;
