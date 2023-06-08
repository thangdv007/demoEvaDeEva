import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '~/assets/Images/Logo';

function OuterSocial() {
    return (
        <div className="outerSocial clear-fix">
            <div className="padding-rl-40">
                <div className="row">
                    <div className="col-sm-4 col-md-6">
                        <div className="social">
                            <ul className="socialIcon">
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/"></a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faFacebookMessenger} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div className="paymentCheckout">
                            <ul>
                                <li>
                                    <img src={logo.visa} />
                                </li>
                                <li>
                                    <img src={logo.mastercard} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OuterSocial;
