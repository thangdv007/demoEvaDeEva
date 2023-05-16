import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

function Topbar() {
    return (
        <div className={cx('top-bar')}>
            <div className={cx('padding-lr-0', 'col-sm-12', 'col-md-8', 'col-lg-6')}>
                <div className={cx('inner-topbar')}>
                    <span>- </span>
                    <span>
                        <Link to="/" title="Mọi thắc mắc hoặc phản hồi dịch vụ, xin liên hệ hotline CSKH:  18001731 ">
                            Mọi thắc mắc hoặc phản hồi dịch vụ, xin liên hệ hotline CSKH: <b>18001731 </b>
                        </Link>
                    </span>
                    <span>- </span>
                    <span>
                        <Link to="/" title="Mua hàng Online: 18001732.">
                            Mua hàng Online: <b>18001732.</b>
                        </Link>
                    </span>
                </div>
            </div>
            <div className={cx('padding-lr-0', 'col-sm-12', 'col-md-4', 'col-lg-6')}>
                <div className={cx('inner-topbar', 'text end')}></div>
            </div>
        </div>
    );
}

export default Topbar;
