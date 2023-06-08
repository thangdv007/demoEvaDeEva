import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SectionFooter from './components/SectionFooter/SectionFooter';
import OuterSocial from './components/OuterSocial/OuterSocial';
import FooterBottom from './components/FooterBottom/FooterBottom';
import Button from '~/components/Button/Button';

function Footer() {
    return (
        <>
            <section id="" className="clear-fix">
                <div className="innerStore">
                    Tìm{' '}
                    <Button store to="/">
                        cửa hàng
                    </Button>{' '}
                    gần bạn nhất <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <SectionFooter />
                <OuterSocial />
                <FooterBottom />
            </section>
        </>
    );
}

export default Footer;
