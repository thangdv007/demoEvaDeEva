import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import product from '~/assets/Images/Products';
import Button from '~/components/Button/Button';
import { useEffect, useState } from 'react';
import Breadcrumb from '~/components/Breadcrumb';
import { useDispatch } from 'react-redux';
import { updateCartCount } from '~/redux/countCart';

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            img: product.productImg1,
            name: 'Đầm sát nách, dáng thắt eo',
            variant: 'Họa tiết / M / tơ',
            price: '20',
            quantity: 1,
            total: '20',
        },
        {
            id: 2,
            img: product.productImg2,
            name: 'Đầm sát nách, dáng thắt eo',
            variant: 'Họa tiết / M / tơ',
            price: '30',
            quantity: 1,
            total: '30',
        },
    ]);
    const dispatch = useDispatch();
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        updatedToltalPrice();
    }, [cartItems]);
    //cập nhật tổng tiền
    const updatedToltalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    };
    useEffect(() => {
        const updateTotalQuantity = () => {
            const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
            setTotalQuantity(totalQuantity);
            return totalQuantity;
        };
        dispatch(updateCartCount(updateTotalQuantity()));
    }, [cartItems, dispatch]);

    //xóa sản phẩm khỏi giỏ hàng
    const handleRemoveItem = (itemId) => {
        const updatedItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedItems);
    };
    //thêm sản phẩm
    const handleIncrease = (itemId, event) => {
        event.preventDefault();
        const updatedItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartItems(updatedItems);
    };
    //giảm sản phẩm
    const handleDecrease = (itemId, event) => {
        event.preventDefault();
        const updatedItems = cartItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCartItems(updatedItems);
    };
    const [totalPrice, setTotalPrice] = useState(0);

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
                                                        {cartItems.map((item) => (
                                                            <tr className="line-item-container" key={item.id}>
                                                                <td className="remove text-center hidden-xs">
                                                                    <Button onClick={() => handleRemoveItem(item.id)}>
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
                                                                            <h3>{item.name}</h3>
                                                                        </Button>
                                                                        <p className="variant">
                                                                            <span className="variant-title">
                                                                                {item.variant}
                                                                            </span>
                                                                        </p>
                                                                        <div className="visible-xs">
                                                                            <p>
                                                                                <span>{item.price}</span>
                                                                            </p>
                                                                            <p className="visible-xs">
                                                                                Thành tiền:{' '}
                                                                                <span className="line-item-total">
                                                                                    {totalPrice}
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </span>
                                                                </td>
                                                                <td className="price text-center priceLine hidden-xs">
                                                                    <p>
                                                                        <span>{item.price}</span>
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
                                                                            {item.total * item.quantity}
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
                                                    <textarea id="note" name="note" rows={8} cols={50} value={''} />
                                                    <div className="promotion304">
                                                        <ul>
                                                            <li>
                                                                <i className="fa-solid fa-check" />
                                                                &nbsp;Miễn phí giao hàng cho hóa đơn từ 699.000đ
                                                            </li>
                                                            <li>
                                                                <i className="fa-solid fa-check" />
                                                                &nbsp;Phí giao hàng 20.000đ cho hóa đơn dưới 699.000đ
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12 text-right">
                                                <p className="order-infor">
                                                    Tổng cộng:{' '}
                                                    <span className="total-price">
                                                        <b>{totalPrice}</b>
                                                    </span>
                                                </p>
                                                <div className="cart-buttons">
                                                    <Button to="" pay id="checkout" name="checkout">
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
                                            <Link to="">
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
