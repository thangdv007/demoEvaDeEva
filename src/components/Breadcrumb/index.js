import { Link } from 'react-router-dom';

function Breadcrumb({ pageName, currentAcc }) {
    return (
        <div className="padding-rl-40">
            <div style={{ backgroundColor: '#ededed' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{ padding: 10 }}>
                        <li className="breadcrumb-item">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        {pageName === 'product' ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to="">Danh mục sản phẩm</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {}
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
