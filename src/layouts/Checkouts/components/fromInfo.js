import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '~/components/Button/Button';
import { removeFromCart } from '~/redux/actions/cartActions';
import { handleLogoutRedux } from '~/redux/actions/userAction';

function FromInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [addr, setAddr] = useState('');
    const [isOrderClicked, setIsOrderClicked] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const currentUser = useSelector((state) => state.user.user.auth);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.user.user);
    const handleLogout = () => {
        dispatch(handleLogoutRedux());
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(Number(event.target.value));
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleAddrChange = (event) => {
        setAddr(event.target.value);
    };
    const handleOrder = (event) => {
        event.preventDefault();
        setIsOrderClicked(true);
        if (!firstName || !lastName || !email || !phone || !addr) {
            toast.error('Vui lòng điền đầy đủ thông tin', {
                position: toast.POSITION_TOP_RIGHT,
                pauseOnHover: false,
                theme: 'dark',
            });
            return;
        }
        const orderInfo = {
            firstName,
            lastName,
            email,
            phone,
            address: addr,
        };

        navigate('/checkout/thankyou', orderInfo);
        cartItems.forEach((item) => {
            dispatch(removeFromCart(item.id));
        });
    };
    return (
        <>
            <div className="main-content-chkt">
                <div className="step">
                    <div className="step-section">
                        <div className="section">
                            <div className="section-header">
                                <h2 className="section-title">Thông tin giao hàng</h2>
                            </div>
                            {currentUser === null || currentUser === false ? (
                                <>
                                    <div className="section-content section-info">
                                        <p className="section-content-text">
                                            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                                        </p>
                                    </div>
                                    <div className="fieldset">
                                        <div
                                            className={`field field-first-thirds ${
                                                isOrderClicked && !firstName ? 'field-error' : ''
                                            }`}
                                        >
                                            <div className="field-input-wrapper">
                                                <label className="field-label">Họ</label>
                                                <input
                                                    placeholder="Họ"
                                                    className="field-input"
                                                    size={30}
                                                    type="text"
                                                    value={firstName}
                                                    onChange={handleFirstNameChange}
                                                />
                                            </div>
                                            {isOrderClicked && !firstName && (
                                                <p className="field-message field-message-error">
                                                    Họ không được để trống
                                                </p>
                                            )}
                                        </div>
                                        <div
                                            className={`field field-first-thirds ${
                                                isOrderClicked && !lastName ? 'field-error' : ''
                                            }`}
                                        >
                                            <div className="field-input-wrapper">
                                                <label className="field-label">Tên</label>
                                                <input
                                                    placeholder="Tên"
                                                    className="field-input"
                                                    size={30}
                                                    type="text"
                                                    value={lastName}
                                                    onChange={handleLastNameChange}
                                                />
                                            </div>
                                            {isOrderClicked && !lastName && (
                                                <p className="field-message field-message-error">
                                                    Tên không được để trống
                                                </p>
                                            )}
                                        </div>
                                        <div
                                            className={`field field-required field-two-thirds ${
                                                isOrderClicked && !email ? 'field-error' : ''
                                            }`}
                                        >
                                            <div className="field-input-wrapper">
                                                <label className="field-label">Email</label>
                                                <input
                                                    required
                                                    placeholder="Email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                    className="field-input"
                                                    size={30}
                                                    type="email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                            </div>
                                            {isOrderClicked && !email && (
                                                <p className="field-message field-message-error">
                                                    Email không được để trống
                                                </p>
                                            )}
                                        </div>
                                        <div
                                            className={`field field-required field-third ${
                                                isOrderClicked && !phone ? 'field-error' : ''
                                            }`}
                                        >
                                            <div className="field-input-wrapper">
                                                <label className="field-label">Số điện thoại</label>
                                                <input
                                                    required
                                                    pattern="0[0-9]{9}"
                                                    placeholder="Số điện thoại"
                                                    className="field-input"
                                                    size={30}
                                                    maxLength={15}
                                                    type="tel"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                />
                                            </div>
                                            {isOrderClicked && !phone && (
                                                <p className="field-message field-message-error">
                                                    Số điện thoại không để trống
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="logged-in-customer-information">
                                        &nbsp;
                                        <div className="logged-in-customer-information-avatar-wrapper">
                                            <div className="logged-in-customer-information-avatar gravatar" />
                                        </div>
                                        <p className="logged-in-customer-information-paragraph">
                                            {user.username}&nbsp;({user.email})
                                            <br />
                                            <Link to="/cart" onClick={handleLogout}>
                                                Đăng xuất
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="fieldset">
                                        <div className="field field-show-floating-label">
                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                <label className="field-label">Thêm địa chỉ mới...</label>
                                                <select className="field-input" id="stored_addresses">
                                                    <option value={0}>Địa chỉ đã lưu trữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div
                                                className={`field field-first-thirds field-user-last ${
                                                    isOrderClicked && !firstName ? 'field-error' : ''
                                                }`}
                                            >
                                                <div className="field-input-wrapper">
                                                    <label className="field-label">Họ</label>
                                                    <input
                                                        placeholder="Họ"
                                                        className="field-input"
                                                        size={30}
                                                        type="text"
                                                        value={firstName}
                                                        onChange={handleFirstNameChange}
                                                    />
                                                </div>
                                            </div>
                                            {isOrderClicked && !firstName && (
                                                <p className="field-message field-message-error">
                                                    Họ không được để trống
                                                </p>
                                            )}
                                            <div
                                                className={`field field-first-thirds field-user-first ${
                                                    isOrderClicked && !lastName ? 'field-error' : ''
                                                }`}
                                            >
                                                <div className="field-input-wrapper">
                                                    <label className="field-label">Tên</label>
                                                    <input
                                                        placeholder="Tên"
                                                        className="field-input"
                                                        size={30}
                                                        type="text"
                                                        value={lastName}
                                                        onChange={handleLastNameChange}
                                                    />
                                                </div>
                                            </div>
                                            {isOrderClicked && !lastName && (
                                                <p className="field-message field-message-error">
                                                    Tên không được để trống
                                                </p>
                                            )}
                                        </div>
                                        <div
                                            className={`field field-required field-third ${
                                                isOrderClicked && !phone ? 'field-error' : ''
                                            }`}
                                        >
                                            <div className="field-input-wrapper">
                                                <label className="field-label">Số điện thoại</label>
                                                <input
                                                    required
                                                    pattern="0[0-9]{9}"
                                                    placeholder="Số điện thoại"
                                                    className="field-input"
                                                    size={30}
                                                    maxLength={15}
                                                    type="tel"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                />
                                            </div>
                                            {isOrderClicked && !phone && (
                                                <p className="field-message field-message-error">
                                                    Số điện thoại không để trống
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="fieldset">
                                <div className={`field ${isOrderClicked && !addr ? 'field-error' : ''}`}>
                                    <div className="field-input-wrapper">
                                        <label className="field-label" htmlFor="">
                                            Địa Chỉ
                                        </label>
                                        <input
                                            required
                                            placeholder="Địa Chỉ"
                                            className="field-input"
                                            size={30}
                                            maxLength={15}
                                            type="tel"
                                            value={addr}
                                            onChange={handleAddrChange}
                                        />
                                    </div>
                                    {isOrderClicked && !addr && (
                                        <p className="field-message field-message-error">Địa không được để trống</p>
                                    )}
                                </div>
                                <div className="field field-show-floating-label field-third">
                                    <div className="field-input-wrapper field-input-wrapper-select">
                                        <label className="field-label" htmlFor="customer_shipping_district">
                                            Tỉnh / thành
                                        </label>
                                        <select
                                            className="field-input"
                                            id="customer_shipping_district"
                                            name="customer_shipping_district"
                                        >
                                            <option data-code="null" value="null" selected="">
                                                Chọn tỉnh / thành
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field field-show-floating-label field-third">
                                    <div className="field-input-wrapper field-input-wrapper-select">
                                        <label className="field-label" htmlFor="customer_shipping_district">
                                            Quận / huyện
                                        </label>
                                        <select
                                            className="field-input"
                                            id="customer_shipping_district"
                                            name="customer_shipping_district"
                                        >
                                            <option data-code="null" value="null" selected="">
                                                Chọn quận / huyện
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field field-show-floating-label field-third">
                                    <div className="field-input-wrapper field-input-wrapper-select">
                                        <label className="field-label" htmlFor="customer_shipping_district">
                                            Phường / xã
                                        </label>
                                        <select
                                            className="field-input"
                                            id="customer_shipping_district"
                                            name="customer_shipping_district"
                                        >
                                            <option data-code="null" value="null" selected="">
                                                Chọn phường / xã
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="clear-fix">
                                <div id="section-shipping-rate" className="section-shipping">
                                    <div className="section-header">
                                        <h2 className="section-title">Phương thức vận chuyển</h2>
                                    </div>
                                    <div className="section-content">
                                        <div className="content-box  blank-slate">
                                            <i className="blank-slate-icon icon icon-closed-box " />
                                            <p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="section-payment-method" className="section">
                                    <div className="section-header">
                                        <h2 className="section-title">Phương thức thanh toán</h2>
                                    </div>
                                    <div className="section-content">
                                        <div className="content-box">
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            value={1}
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            checked={selectedPaymentMethod === 1}
                                                            onChange={handlePaymentMethodChange}
                                                        />
                                                    </div>
                                                    <div className="radio-content-input">
                                                        <img
                                                            className="main-img"
                                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                                                        />
                                                        <div>
                                                            <span className="radio-label-primary">
                                                                Thanh toán khi giao hàng (COD)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            value={2}
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            checked={selectedPaymentMethod === 2}
                                                            onChange={handlePaymentMethodChange}
                                                        />
                                                    </div>
                                                    <div className="radio-content-input">
                                                        <img
                                                            className="main-img"
                                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                                                        />
                                                        <div>
                                                            <span className="radio-label-primary">
                                                                Chuyển khoản qua ngân hàng
                                                            </span>
                                                            <span className="quick-tagline hidden" />
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            {selectedPaymentMethod === 2 && (
                                                <div
                                                    className="radio-wrapper content-box-row content-box-row-secondary"
                                                    htmlFor=""
                                                >
                                                    <div className="blank-slate">
                                                        Ngân hàng: NGÂN HÀNG ĐẦU TƯ VÀ PHÁT TRIỂN BIDV (BIDV) <br /> Tên
                                                        tài khoản: NGUYEN KIM THANG <br /> Số tài khoản: 09668215874{' '}
                                                        <br /> Nội dung: Mã đơn hàng + Số điện thoại KH đặt hàng để nhân
                                                        viên tra soát nhanh và tránh nhầm lẫn.
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="step-footer" id="step-footer-checkout">
                        <form>
                            <Button type="submit" complete className="btn-done" onClick={handleOrder}>
                                <span className="btn-content">Hoàn tất đơn hàng</span>
                            </Button>
                        </form>
                        <Link className="step-footer-previous-link" to="/cart">
                            Giỏ hàng
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FromInfo;
