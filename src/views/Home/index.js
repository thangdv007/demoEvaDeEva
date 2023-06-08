import NewestProduct from './components/newestProduct';
import BannerHomePage from './components/bannerHomePage';
import SliderHomePage from './components/slider';
import AboutHomePage from './components/aboutHomePage';
import NewArrivals from './components/newArrivals';
import BlogHomePage from './components/BlogHomePage';

function Home() {
    return (
        <>
            <SliderHomePage />
            <BannerHomePage />
            <NewestProduct />
            <AboutHomePage />
            <NewArrivals />
            <section id="home-bannerCenter">
                <div className="innerHomeBannerCenter" data-link="https://evadeeva.com.vn/pages/love-more" />
            </section>
            <BlogHomePage />
        </>
    );
}

export default Home;
