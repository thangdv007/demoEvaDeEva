import { Link, useLocation } from 'react-router-dom';
import ValuableFilter from '../FilterCustom';

function CollectionTitle() {
    const menuCollection = [
        {
            title: 'Áo sơ mi',
            id: 1,
        },
        {
            title: 'Áo dài',
            id: 2,
        },
        {
            title: 'Áo kiểu',
            id: 3,
        },
    ];
    const location = useLocation();

    // Lấy title từ đường dẫn hiện tại
    const getCurrentTitle = () => {
        const path = decodeURIComponent(location.pathname.substring(1));
        const parts = path.split('/');
        const title = parts[parts.length - 1];
        return title;
    };
    return (
        <div className="wrap-collection-title">
            <div className="heading-collection row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="titlePageAll">
                        <span>{getCurrentTitle()}</span>
                    </h1>
                    <ul className="menuCollection">
                        {menuCollection.map((item) => (
                            <li key={item.id}>
                                <Link to="/">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="filter-custom">
                        <span>Bộ lọc: </span>
                        <ValuableFilter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionTitle;
