import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FromInfo from './components/fromInfo';
import OrderInfo from './components/orderInfo';

function Checkouts() {
    return (
        <>
            <ToastContainer />
            {/* checkout === chkt */}
            <div className="content-chkt">
                <Row lg={12} className="wrap-chkt">
                    <Col className="main-chkt">
                        <div className="main-header-chkt">
                            <Link to="/" className="logo-chkt">
                                <h1 className="logo-text-chkt">Eva De Eva</h1>
                            </Link>
                            <ul className="bc-chkt">
                                <li className="bc-item">
                                    <Link to="/cart">Giỏ hàng</Link>
                                </li>

                                <li className="bc-item bc-item-current">Thông tin giao hàng</li>
                            </ul>
                        </div>
                        <FromInfo />
                    </Col>
                    <Col className="side-bar-chkt">
                        <OrderInfo currentPage={true} />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Checkouts;
