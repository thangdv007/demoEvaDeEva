import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import logo from '~/assets/Images/Logo';

const cx = classNames.bind(styles);

function FooterBottom() {
    return (
        <section id="footerBottom" className={cx('footerBottom')}>
            <div className={cx('padding-rl-40')}>
                <div className={cx('infoFooterBottom')}>
                    <span>
                        <b>CÔNG TY TNHH MỸ PHỤC</b>
                        <br />
                        0104972419 - Ngày cấp: 27/10/2010 - Nơi cấp: Sở kế hoạch và đầu tư Hà Nội
                        <br />
                        Trụ sở chính: P404, Tầng 4, Tòa nhà GP Invest, Số 170 đường La Thành, Phường Ô Chợ Dừa, Quận
                        Đống Đa, Thành phố Hà Nội, Việt Nam
                    </span>
                </div>
                <div className={cx('logo-bct')}>
                    <a href="#">
                        <img src={logo.logo_bct} alt="Logo bộ công thương" />
                    </a>
                </div>
                <div className={cx('coppyRight')}>
                    <span>© 2021 Eva de Eva.</span>
                </div>
            </div>
        </section>
    );
}

export default FooterBottom;
