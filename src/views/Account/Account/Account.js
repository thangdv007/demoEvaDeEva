import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '~/components/Breadcrumb';
import Button from '~/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { handleLogoutRedux } from '~/redux/actions/userAction';

function Account() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Sử dụng useSelector để lấy user từ Redux store
    const user = useSelector((state) => state.user.user.user);
    const handleLogout = () => {
        dispatch(handleLogoutRedux());
    };
    useEffect(() => {
        if (user && user.auth === false) {
            navigate('/');
        }
    }, [user]);

    const listOrder = [
        {
            id: 1,
            date: '31/5/2023',
            totalPrice: '20đ',
            statusOrder: 'Đang vận chuyển',
            deliveryBY: 'Chưa có',
        },
        {
            id: 2,
            date: '31/5/2023',
            totalPrice: '20đ',
            statusOrder: 'Đang vận chuyển',
            deliveryBY: 'Chưa có',
        },
    ];

    return (
        <>
            <div className="clear-fix" />
            <div>
                <div>
                    <Breadcrumb pageName="account" />
                </div>
                <div className="title-infor-account">
                    <h1>Tài khoản của bạn</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <h3 className="acc-title">Tài khoản</h3>
                            </div>
                            <div className="list-acc">
                                <div>
                                    <ul>
                                        <li>
                                            <Button text to="/">
                                                Thông tin tài khoản
                                            </Button>
                                        </li>
                                        <li>
                                            <Button text to="/">
                                                Danh sách địa chỉ
                                            </Button>
                                        </li>
                                        <li>
                                            <Button text to="/" onClick={handleLogout}>
                                                Đăng xuất
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-9">
                            <div className="row">
                                <div className="col-sm-12 customer-sidebar">
                                    <p className="title-detail">Thông tin tài khoản</p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        &nbsp; {user?.email}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone} />
                                        &nbsp; {user?.phone}
                                    </p>

                                    <div>
                                        {' '}
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button text to="/address">
                                            Xem địa chỉ
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="customer-orders">
                                        <div className="table-bg">
                                            <p className="title-detail">Danh sách đơn hàng mới nhất</p>
                                            <div className="table-order">
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">Mã đơn hàng</th>
                                                            <th className="text-center">Ngày đặt</th>
                                                            <th className="text-center">Tổng tiền</th>
                                                            <th className="text-center">Trạng thái đơn hàng</th>
                                                            <th className="text-center">Vận chuyển</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {listOrder &&
                                                            listOrder.map((item) => (
                                                                <tr key={item.id}>
                                                                    <th className="text-center">#{item.id}</th>
                                                                    <th className="text-center">{item.date}</th>
                                                                    <th className="text-center">{item.totalPrice}</th>
                                                                    <th className="text-center">{item.statusOrder}</th>
                                                                    <th className="text-center">{item.deliveryBY}</th>
                                                                </tr>
                                                            ))}
                                                        {/* <tr>
                                                            <th className="text-center">#559672</th>
                                                            <th className="text-center">31/5/2023</th>
                                                            <th className="text-center">29đ</th>
                                                            <th className="text-center">Đang vận chuyển</th>
                                                            <th className="text-center">Không có</th>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-center">#559672</th>
                                                            <th className="text-center">31/5/2023</th>
                                                            <th className="text-center">29đ</th>
                                                            <th className="text-center">Đang vận chuyển</th>
                                                            <th className="text-center">Không có</th>
                                                        </tr> */}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;
