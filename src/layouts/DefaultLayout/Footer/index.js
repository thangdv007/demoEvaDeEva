import clsx from 'clsx';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SectionFooter from './components/SectionFooter/SectionFooter';
import OuterSocial from './components/OuterSocial/OuterSocial';
import FooterBottom from './components/FooterBottom/FooterBottom';
function Footer() {
    return (
        <>
            <section id="" className={clsx('clearFix')}>
                <div className={clsx(styles.innerStore)}>
                    Tìm <a href="#">cửa hàng</a> gần bạn nhất <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <SectionFooter />
                <OuterSocial />
                <FooterBottom />
            </section>
        </>
    );
}

export default Footer;
