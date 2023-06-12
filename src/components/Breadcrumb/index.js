import { Link, useLocation } from 'react-router-dom';

function Breadcrumb({ pageName, currentAcc }) {
    // const [productTitle, setProductTitle] = useState('');
    const location = useLocation();
    // Lấy title từ đường dẫn hiện tại
    const getCurrentTitle = () => {
        const path = decodeURIComponent(location.pathname.substring(1));
        const parts = path.split('/');
        const title = parts[parts.length - 1];
        return title;
    };
    // useEffect(() => {
    //     // Hàm lấy tiêu đề từ CSDL dựa trên ID
    //     const getProductTitleById = async (id) => {
    //       try {
    //         // Gọi API hoặc truy vấn CSDL để lấy tiêu đề từ ID
    //         const response = await fetch(`YOUR_API_ENDPOINT/${id}`);
    //         const data = await response.json();
    //         const title = data.title; // Thay 'title' bằng trường tiêu đề tương ứng trong CSDL của bạn
    //         setProductTitle(title);
    //       } catch (error) {
    //         console.error('Error fetching product title:', error);
    //       }
    //     };

    //     // Lấy ID từ đường dẫn hiện tại
    //     const getCurrentId = () => {
    //       const path = decodeURIComponent(location.pathname.substring(1));
    //       const parts = path.split('/');
    //       const id = parts[parts.length - 1];
    //       return id;
    //     };

    //     // Gọi hàm lấy tiêu đề từ CSDL
    //     getProductTitleById(getCurrentId());
    //   }, [location.pathname]);
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
                        ) : pageName === 'productDetails' ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to="">Sản phẩm</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {getCurrentTitle()}
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
