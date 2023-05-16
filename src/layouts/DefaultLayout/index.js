import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header/Header';
import Footer from './Footer';
import Topbar from './Topbar/Topbar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Topbar />
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
