import { Link, useLocation } from 'react-router-dom';

function Breadcrumb({ pageName, currentAcc }) {
    const location = useLocation();

    // Lấy title từ đường dẫn hiện tại
    const getCurrentTitle = () => {
        const path = decodeURIComponent(location.pathname.substring(1));
        const parts = path.split('/');
        const title = parts[parts.length - 1];
        return title;
    };
    return (
        <div className="padding-rl-40">
            <div style={{ backgroundColor: '#ededed' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{ padding: 10 }}>
                        <li className="breadcrumb-item">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        {pageName === 'category' ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to="">Danh mục sản phẩm</Link>
                                </li>

                                <li className="breadcrumb-item active" aria-current="page">
                                    {getCurrentTitle()}
                                </li>
                            </>
                        ) : pageName === 'account' ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to="">Tài khoản</Link>
                                </li>
                                {currentAcc === 'login' ? (
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Đăng nhập
                                    </li>
                                ) : currentAcc === 'register' ? (
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Đăng ký
                                    </li>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : pageName === 'sreach' ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to="">Tìm kiếm - </Link>
                                </li>
                            </>
                        ) : pageName === 'cart' ? (
                            <>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Giỏ hàng
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="breadcrumb-item">{}</li>
                            </>
                        )}
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Breadcrumb;
