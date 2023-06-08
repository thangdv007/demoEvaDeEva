import Header from './Header/Header';
import Footer from './Footer';
import Topbar from './Topbar/Topbar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Topbar />
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
