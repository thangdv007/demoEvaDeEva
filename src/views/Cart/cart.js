import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCircleArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { useEffect, useState } from 'react';
import Breadcrumb from '~/components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {
    calculateTotalQuantity,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    setCartItems,
} from '~/redux/actions/cartActions';

function Cart() {
    const listVoucherDiscount = [
        {
            type: 1,
            title: 'Miễn phí giao hàng cho hóa đơn từ 699.000đ',
        },
        {
            type: 1,
            title: 'Phí giao hàng 20.000đ cho hóa đơn dưới 699.000đ',
        },
        {
            type: 1,
            title: 'Tặng E-Voucher 300K cho đơn hàng nguyên giá từ 2.499.000Đ',
        },
        {
            type: 1,
            title: 'Tặng E-Voucher 500K cho đơn hàng nguyên giá từ 2.999.000Đ',
        },
        {
            type: 0,
            title: `Tặng E-Voucher 200K cho đơn hàng nguyên giá từ 1.499.000Đ
            (E-Voucher được áp dụng cho lần mua tiếp theo)`,
        },
    ];
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            dispatch(setCartItems(JSON.parse(storedCartItems)));
        }
    }, [dispatch]);
    useEffect(() => {
        dispatch(calculateTotalQuantity());
    }, [cartItems, dispatch]);

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

    const handleRemoveItem = (itemId, size) => {
        dispatch(removeFromCart(itemId, size));
    };

    const handleIncrease = (itemId, event) => {
        event.preventDefault();
        dispatch(increaseQuantity(itemId));
    };

    const handleDecrease = (itemId, event) => {
        event.preventDefault();
        dispatch(decreaseQuantity(itemId));
    };

    const handleCheckOut = () => {
        navigate('/checkout');
    };

    return (
        <>
            <main>
                <div className="clear-fix" />
                <Breadcrumb pageName="cart" />
                <div className="padding-rl-40">
                    <section id="cart" className="cart">
                        <div className="wrapbox-content-cart">
                            <div className="container-fluid">
                                {cartItems.length > 0 ? (
                                    <form id="cartformpage">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <table className="table-cart">
                                                    <thead className="hidden-xs">
                                                        <tr>
                                                            <th className="remove tableDelete">&nbsp;</th>
                                                            <th className="image tableImage">Hình ảnh</th>
                                                            <th className="tableName">Sản phẩm</th>
                                                            <th className="price tableDelete">Giá</th>
                                                            <th className="qty tableQuantity">Số lượng</th>
                                                            <th className="total tableTotal">&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartItems.map((item, index) => (
                                                            <tr className="line-item-container" key={index}>
                                                                <td className="remove text-center hidden-xs">
                                                                    <Button
                                                                        onClick={() =>
                                                                            handleRemoveItem(item.id, item.size)
                                                                        }
                                                                    >
                                                                        <FontAwesomeIcon icon={faX} />
                                                                    </Button>
                                                                </td>
                                                                <td className="image text-center">
                                                                    <Button to="/">
                                                                        <img
                                                                            className="cart-item-img"
                                                                            src={item.img}
                                                                            alt="Cart item"
                                                                        />
                                                                    </Button>
                                                                    <p className="visible-xs">
                                                                        <a className="btnDeleteCart" href="#">
                                                                            Xóa
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                                <td className="tableName">
                                                                    <span className="nameInCart">
                                                                        <Button to="/">
                                                                            <h3>{item.title}</h3>
                                                                        </Button>
                                                                        <p className="variant">
                                                                            <span className="variant-title">
                                                                                {item.color} / {item.size} /{' '}
                                                                                {item.material}
                                                                            </span>
                                                                        </p>
                                                                        <div className="visible-xs">
                                                                            <p>
                                                                                <span>{item.price}đ</span>
                                                                            </p>
                                                                            <p className="visible-xs">
                                                                                Thành tiền:{' '}
                                                                                <span className="line-item-total">
                                                                                    {totalPrice}đ
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </span>
                                                                </td>
                                                                <td className="price text-center priceLine hidden-xs">
                                                                    <p>
                                                                        <span>{item.price}đ</span>
                                                                    </p>
                                                                </td>
                                                                <td className="qty text-center">
                                                                    <div className="quantity-partent">
                                                                        <Button
                                                                            small
                                                                            onClick={(event) =>
                                                                                handleDecrease(item.id, event)
                                                                            }
                                                                        >
                                                                            -
                                                                        </Button>
                                                                        <input
                                                                            type="text"
                                                                            size={4}
                                                                            min={1}
                                                                            value={item.quantity}
                                                                            className="tc line-item-qty item-quantity"
                                                                            readOnly
                                                                        />
                                                                        <Button
                                                                            small
                                                                            onClick={(event) =>
                                                                                handleIncrease(item.id, event)
                                                                            }
                                                                        >
                                                                            +
                                                                        </Button>
                                                                    </div>
                                                                </td>
                                                                <td className="total text-center hidden-xs">
                                                                    <p className="price">
                                                                        <span className="line-item-total">
                                                                            {parseFloat(item.price) *
                                                                                parseFloat(item.quantity)}
                                                                            đ
                                                                        </span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-md-9 col-sm-12 col-xs-12">
                                                <div className="checkout-note clearfix">
                                                    <label className="clearfix">Ghi chú: </label>
                                                    <textarea
                                                        id="note"
                                                        name="note"
                                                        rows={8}
                                                        cols={50}
                                                        value={''}
                                                        readOnly
                                                    />
                                                    <div className="promotion304">
                                                        <ul>
                                                            {listVoucherDiscount.map((voucher, index) => {
                                                                if (voucher.type === 0) {
                                                                    return null;
                                                                }

                                                                return (
                                                                    <li key={index}>
                                                                        <FontAwesomeIcon icon={faCheck} />
                                                                        &nbsp;{voucher.title}
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12 text-right">
                                                <p className="order-infor">
                                                    Tổng cộng:{' '}
                                                    <span className="total-price">
                                                        <b>{totalPrice}đ</b>
                                                    </span>
                                                </p>
                                                <div className="cart-buttons">
                                                    <Button pay id="checkout" name="checkout" onClick={handleCheckOut}>
                                                        Thanh toán
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="cart-empty">
                                        <p>Giỏ hàng của bạn đang trống</p>
                                        <div>
                                            <Link to={`/collections/${'SẢN PHẨM'}`}>
                                                <FontAwesomeIcon icon={faCircleArrowLeft} />
                                                &nbsp;Tiếp tục mua hàng
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Cart;
