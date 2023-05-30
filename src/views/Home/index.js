import NewestProduct from './components/newestProduct';
import BannerHomePage from './components/bannerHomePage';
import SliderHomePage from './components/slider';
import AboutHomePage from './components/aboutHomePage';

function Home() {
    return (
        <>
            <SliderHomePage />
            <BannerHomePage />
            <NewestProduct />
            <AboutHomePage />
        </>
    );
}

export default Home;
