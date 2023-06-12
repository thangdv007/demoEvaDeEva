import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '~/components/Button/Button';
import { setCartItems } from '~/redux/actions/cartActions';
import 'react-toastify/dist/ReactToastify.css';

function OrderInfo({ currentPage }) {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [voucher, setVoucher] = useState();
    const cartItems = useSelector((state) => state.cart.cartItems);
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            dispatch(setCartItems(JSON.parse(storedCartItems)));
        }
    }, [dispatch]);
    useEffect(() => {
        const updatedTotalPrice = () => {
            const totalPrice = cartItems.reduce((total, item) => {
                const itemPrice = parseFloat(item.price);
                const itemQuantity = parseFloat(item.quantity);

                if (isNaN(itemPrice) || isNaN(itemQuantity)) {
                    return total;
                }

                return total + itemPrice * itemQuantity;
            }, 0);

            setTotalPrice(totalPrice);
        };
        updatedTotalPrice();
    }, [cartItems]);
    const handleChangeVoucher = (event) => {
        setVoucher(event.target.value);
    };
    const handleUseVoucher = () => {
        if (!voucher) {
            toast.error('Voucher không đúng', {
                position: toast.POSITION_TOP_RIGHT,
                pauseOnHover: false,
                autoClose: 5000,
            });
        }
    };
    return (
        <div className="side-bar-content">
            <div className="order-sum order-sum-collapsed">
                <div className="order-sum-section">
                    <div className="order-sum-sec product-list">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <span className="visually-hidden">Hình ảnh</span>
                                    </th>
                                    <th scope="col">
                                        <span className="visually-hidden">Mô tả</span>
                                    </th>
                                    <th scope="col">
                                        <span className="visually-hidden">Số lượng</span>
                                    </th>
                                    <th scope="col">
                                        <span className="visually-hidden">Giá</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr className="product" key={index}>
                                        <td className="product-image">
                                            <div className="product-thumbnail">
                                                <div className="product-thumbnail-wrapper">
                                                    <img
                                                        className="product-thumbnail-image"
                                                        alt={item.title}
                                                        src={item.img}
                                                    />
                                                </div>
                                                <span className="product-thumbnail-quantity" aria-hidden="true">
                                                    {item.quantity}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="product-description">
                                            <span className="product-description-name order-summary-emphasis">
                                                {item.title}
                                            </span>
                                            <span className="product-description-variant order-summary-small-text">
                                                {item.color} / {item.size} / {item.material}
                                            </span>
                                        </td>
                                        <td className="product-quantity visually-hidden">{item.quantity}</td>
                                        <td className="product-price">
                                            <span className="order-summary-emphasis">{item.price}đ</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {currentPage ? (
                        <div className="order-sum-sec discount">
                            <div>
                                <div className="fieldset">
                                    <div className="field clearfix">
                                        <div className="row">
                                            <div className="field-input-wrapper col-lg-8">
                                                <label className="field-label">Mã giảm giá</label>
                                                <input
                                                    placeholder="Mã giảm giá"
                                                    className="field-input"
                                                    size={30}
                                                    type="text"
                                                    value={voucher}
                                                    onChange={handleChangeVoucher}
                                                />
                                            </div>
                                            <Button blurred className="btn-use col-lg-4" onClick={handleUseVoucher}>
                                                Sử dụng
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="coupon-notification">
                                Mã giảm giá không áp dụng đồng thời chương trình khuyến mãi khác
                            </span>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <div className="order-sum-sec payment-line">
                        <table className="total-line-table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <span className="visually-hidden">Mô tả</span>
                                    </th>
                                    <th scope="col">
                                        <span className="visually-hidden">Giá</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="total-line total-line-subtotal">
                                    <td className="total-line-name">Tạm tính</td>
                                    <td className="total-line-price">
                                        <span className="order-summary-emphasis">{totalPrice}đ</span>
                                    </td>
                                </tr>
                                <tr className="total-line total-line-shipping">
                                    <td className="total-line-name">Phí vận chuyển</td>
                                    <td className="total-line-price">
                                        {currentPage ? (
                                            <span className="order-summary-emphasis">—</span>
                                        ) : (
                                            <span className="order-summary-emphasis">Miễn phí</span>
                                        )}
                                    </td>
                                </tr>
                                <tr className="total-line">
                                    <td
                                        className="freeship-notification"
                                        colSpan={2}
                                        style={{ textAlign: 'left', color: '#a73340' }}
                                    >
                                        Bạn được miễn phí giao hàng cho hóa đơn trên <strong>699.000đ</strong>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="total-line-table-footer">
                                <tr className="total-line">
                                    <td className="total-line-name payment-due-label">
                                        <span className="payment-due-label-total">Tổng cộng</span>
                                    </td>
                                    <td className="total-line-name payment-due">
                                        <span className="payment-due-currency">VND</span>
                                        <span className="payment-due-price">{totalPrice}đ</span>
                                    </td>
                                </tr>
                                <tr className="total-line total-line-gift">
                                    <td colSpan={2}>
                                        <p>
                                            Sau khi “Đặt hàng” thành công, EVA DE EVA ghi nhận đơn hàng và sẽ liên hệ
                                            trực tiếp với quý khách để xác nhận thông tin và gửi E-Voucher qua SMS. Xin
                                            chân thành cảm ơn!
                                        </p>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderInfo;
