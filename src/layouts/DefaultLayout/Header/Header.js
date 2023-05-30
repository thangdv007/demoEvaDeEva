import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/Images/Logo';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productCollection from '~/assets/Images/ProductCollection';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Header() {
    // Lấy thông tin người dùng từ Redux store
    const currentUser = useSelector((state) => state.auth.currentUser);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        {
            title: 'HÀNG MỚI VỀ',
            to: '/',
        },
        {
            title: 'HÀNG BÁN CHẠY',
            to: '/',
        },
        {
            title: 'SẢN PHẨM',
            to: '/',
            children: [
                { title: 'Đầm', type: 'image', img: productCollection.dam, to: '/' },
                { title: 'Áo', type: 'image', img: productCollection.ao, to: '/' },
                { title: 'Áo sơ mi', type: 'image', img: productCollection.aoSoMi, to: '/' },
                { title: 'Áo kiểu', type: 'image', img: productCollection.aoKieu, to: '/' },
                { title: 'Jumpsuit', type: 'image', img: productCollection.jumpSuit, to: '/' },
                { title: 'Chân váy', type: 'image', img: productCollection.chanVay, to: '/' },
                { title: 'Quần', type: 'image', img: productCollection.quan, to: '/' },
                { title: 'Homewear', type: 'image', img: productCollection.homeWear, to: '/' },
            ],
        },
        {
            title: 'UNIQUE COLLECTION',
            to: '/',
        },
        {
            title: 'BỘ SƯU TẬP',
            to: '/',
        },
        {
            title: 'PHỤ KIỆN',
            to: '/',
            subItems: [
                { title: 'Túi sách', to: '/' },
                { title: 'Giày', to: '/' },
                { title: 'Cài Áo', to: '/' },
            ],
        },
        {
            title: 'HOMEWEAR',
            to: '/',
        },
        {
            title: 'ĐỒ LÓT',
            to: '/',
        },
        {
            title: 'LADY ME',
            to: '/',
        },
        {
            title: 'SALE',
            to: '/',
            subItems: [
                { title: 'Sale 30%', to: '/' },
                { title: 'Sale 70%', to: '/' },
                { title: 'Sale 70% Áo Sơ Mi', to: '/' },
                { title: 'Sale 70% Áo Kiểu', to: '/' },
                { title: 'Sale 70% Đầm', to: '/' },
                { title: 'Sale 70% Quần', to: '/' },
                { title: 'Sale 70% Chân váy', to: '/' },
                { title: 'Sale 70% Áo Vest, Blazer', to: '/' },
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

    const renderNavItem = (item, index) => {
        const hasChildren = item.children?.length > 0;
        const listItemClass = hasChildren ? 'hasMegamenu' : '';

        if (hasChildren) {
            return (
                <li key={index} className={cx('hasMegamenu')}>
                    <Link to={item.to}>{item.title}</Link>
                    <div className={cx('subMegaMenu')}>
                        <div className={cx('innerSubMegaMenu')}>
                            <ul>
                                {item.children.map((child, index) => (
                                    <li key={index} className={cx('itemMegaMenu')}>
                                        <Link to={child.to}>
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
                <li key={index} className={listItemClass}>
                    <Link to={item.to}>{item.title}</Link>
                    {item.subItems && (
                        <ul className={cx('subMenu')}>
                            {item.subItems.map((child, index) => (
                                <li key={index}>
                                    <Link to={child.to}>{child.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            );
        }
    };

    return (
        <header
            id="header"
            className={
                isScrolled ? cx('main-header', 'container-fluid', 'scrolled') : cx('main-header', 'container-fluid')
            }
        >
            <div className={cx('nav-lap', 'row')}>
                <div className={cx('padding-lr-0', 'col-sm-12', 'col-md-3', 'col-lg-2')}>
                    <div>
                        <Link to="/" title="Logo">
                            <img src={logo.logo_eva} alt="Eva De Eva" />
                        </Link>
                    </div>
                </div>
                <div className={cx('fix-position', 'col-lg-7')}>
                    <div className={cx('main-menu')}>
                        <div className={cx('nav')}>
                            <nav className={cx('main-nav')}>
                                <ul>{navItems.map((item) => renderNavItem(item))}</ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={cx('col-sm-12', 'col-md-9', 'col-lg-3')}>
                    <div className={cx('right-header')}>
                        <div className={cx('cart')}>
                            <span>
                                <Link to="/cart" title="Giỏ hàng">
                                    <img src={logo.cart} alt="Giỏ hàng" />
                                    <span className={cx('count-cart')}>0</span>
                                </Link>
                            </span>
                        </div>
                        <div className={cx('account')}>
                            {!currentUser || currentUser.length === 0 ? (
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
                        <div className={cx('search')}>
                            <form action="" className={cx('search-desktop')}>
                                <input
                                    type="text"
                                    name="q"
                                    id=""
                                    className={cx('searchI')}
                                    placeholder="Tìm sản phẩm..."
                                    defaultValue=""
                                />
                                <button type="submit" className={cx('search-btn')}>
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
