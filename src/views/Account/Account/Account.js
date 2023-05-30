import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import Button from '~/components/Button/Button';
import { logout } from '~/redux/userSlice';

function Account() {
    // Sử dụng useSelector để lấy currentUser từ Redux store
    const currentUser = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div className="clear-fix" />
            <div>
                <div>
                    <Breadcrumb pageName="account" />
                </div>
                <div className="container">
                    <div>
                        <div className="left-page col-md-6 col-lg-6">
                            <div className="left clearfix ">
                                <h1>Xin chào người anh em {currentUser.username}</h1>
                            </div>
                            <div>
                                <Button to="/" onClick={handleLogout}>
                                    {' '}
                                    Đăng xuất
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;
