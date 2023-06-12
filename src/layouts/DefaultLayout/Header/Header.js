import logo from '~/assets/Images/Logo';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import productCollection from '~/assets/Images/ProductCollection';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalQuantity } from '~/redux/actions/cartActions';

function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    // Lấy thông tin người dùng từ Redux store
    const currentUser = useSelector((state) => state.user.user.auth);
    const [isScrolled, setIsScrolled] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    useEffect(() => {
        const storedTotalQuantity = localStorage.getItem('totalQuantity');
        if (storedTotalQuantity) {
            dispatch(setTotalQuantity(JSON.parse(storedTotalQuantity)));
        }
    }, [dispatch]);
    const navItems = [
        {
            title: 'HÀNG MỚI VỀ',
            id: 1,
        },
        {
            title: 'HÀNG BÁN CHẠY',
            id: 2,
        },
        {
            title: 'SẢN PHẨM',
            id: 3,
            children: [
                { title: 'Đầm', type: 'image', img: productCollection.dam, id: 4 },
                { title: 'Áo', type: 'image', img: productCollection.ao, id: 5 },
                { title: 'Áo sơ mi', type: 'image', img: productCollection.aoSoMi, id: 6 },
                { title: 'Áo kiểu', type: 'image', img: productCollection.aoKieu, id: 7 },
                { title: 'Jumpsuit', type: 'image', img: productCollection.jumpSuit, id: 8 },
                { title: 'Chân váy', type: 'image', img: productCollection.chanVay, id: 9 },
                { title: 'Quần', type: 'image', img: productCollection.quan, id: 10 },
                { title: 'Homewear', type: 'image', img: productCollection.homeWear, id: 11 },
            ],
        },
        {
            title: 'UNIQUE COLLECTION',
            id: 12,
        },
        {
            title: 'BỘ SƯU TẬP',
            id: 13,
        },
        {
            title: 'PHỤ KIỆN',
            id: 14,
            subItems: [
                { title: 'Túi sách', id: 15 },
                { title: 'Giày', id: 16 },
                { title: 'Cài Áo', id: 17 },
            ],
        },
        {
            title: 'HOMEWEAR',
            id: 18,
        },
        {
            title: 'ĐỒ LÓT',
            id: 19,
        },
        {
            title: 'LADY ME',
            id: 20,
        },
        {
            title: 'SALE',
            id: 21,
            subItems: [
                { title: 'Sale 30%', id: 22 },
                { title: 'Sale 70%', id: 23 },
                { title: 'Sale 70% Áo Sơ Mi', id: 24 },
                { title: 'Sale 70% Áo Kiểu', id: 25 },
                { title: 'Sale 70% Đầm', id: 26 },
                { title: 'Sale 70% Quần', id: 27 },
                { title: 'Sale 70% Chân váy', id: 28 },
                { title: 'Sale 70% Áo Vest, Blazer', id: 29 },
            ],
        },
    ];

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        // Kiểm tra vị trí cuộn và cập nhật trạng thái
        if (scrollTop > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const renderNavItem = (item) => {
        const hasChildren = item.children?.length > 0;
        const listItemClass = hasChildren ? 'hasMegamenu' : '';
        // Giải mã đường dẫn URL trước khi so sánh
        const decodedPathname = decodeURIComponent(location.pathname);

        const isActive =
            decodedPathname.includes(`/collections/${item.title}`) ||
            (decodedPathname === '/pages/campaign' && item.title === 'BỘ SƯU TẬP');

        // Kiểm tra xem có bất kỳ subItem nào đang active hay không
        const isSubItemActive =
            item.subItems && item.subItems.some((subItem) => decodedPathname.includes(`/collections/${subItem.title}`));

        const isChildActive =
            item.children && item.children.some((child) => decodedPathname.includes(`/collections/${child.title}`));

        // isActive sẽ là true nếu isActive của bất kỳ subItem hoặc child nào đang active
        const isParentActive = isActive || isSubItemActive || isChildActive;

        if (hasChildren) {
            return (
                <li key={item.id} className={isParentActive ? 'active hasMegamenu' : 'hasMegamenu'}>
                    <Link to={`/collections/${item.title}`}>{item.title}</Link>
                    <div className="subMegaMenu">
                        <div className="innerSubMegaMenu">
                            <ul>
                                {item.children.map((child) => (
                                    <li key={child.id} className="itemMegaMenu">
                                        <Link to={`/collections/${child.title}`}>
                                            <img src={child.img} alt={child.title} />
                                            <span>{child.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            );
        } else {
            return (
                <li key={item.id} className={isParentActive ? 'active' + listItemClass : listItemClass}>
                    {item.title === 'BỘ SƯU TẬP' ? (
                        <Link to={'/pages/campaign'}>BỘ SƯU TẬP</Link>
                    ) : (
                        <Link to={`/collections/${item.title}`}>{item.title}</Link>
                    )}
                    {item.subItems && (
                        <ul className="subMenu">
                            {item.subItems.map((subItem) => {
                                return (
                                    <li key={subItem.id}>
                                        <Link to={`/collections/${encodeURIComponent(subItem.title)}`}>
                                            {subItem.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </li>
            );
        }
    };

    return (
        <header
            id="header"
            className={isScrolled ? 'main-header container-fluid scrolled' : 'main-header container-fluid'}
        >
            <div className="nav-lap row">
                <div className="padding-lr-0 col-sm-12 col-md-3 col-lg-2">
                    <div>
                        <Link to="/" title="Logo">
                            <img src={logo.logo_eva} alt="Eva De Eva" />
                        </Link>
                    </div>
                </div>
                <div className="fix-position col-lg-7">
                    <div className="main-menu">
                        <div className="nav">
                            <nav className="main-nav">
                                <ul>{navItems.map((item) => renderNavItem(item))}</ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-3">
                    <div className="right-header">
                        <div className="cart">
                            <span>
                                <Link to="/cart" title="Giỏ hàng">
                                    <img src={logo.cart} alt="Giỏ hàng" />
                                    <span className="count-cart">{totalQuantity}</span>
                                </Link>
                            </span>
                        </div>
                        <div className="account">
                            {currentUser === null || currentUser === false ? (
                                <>
                                    <Link to="/login" title="Tài khoản">
                                        <img src={logo.account} alt="Tài khoản" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/account" title="Tài khoản">
                                        <img src={logo.account} alt="Tài khoản" />
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="search">
                            <form action="" className="search-desktop">
                                <input
                                    type="text"
                                    name="q"
                                    id=""
                                    className="searchI"
                                    placeholder="Tìm sản phẩm..."
                                    defaultValue=""
                                />
                                <button type="submit" className="search-btn">
                                    <img src={logo.search} alt="" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
