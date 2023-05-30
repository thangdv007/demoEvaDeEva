import HomeBanner from '~/assets/Images/HomeBanner';
function BannerHomePage() {
    const banner = [
        {
            id: 1,
            img: HomeBanner.banner1,
        },
        {
            id: 2,
            img: HomeBanner.banner2,
        },
        {
            id: 3,
            img: HomeBanner.banner3,
        },
    ];

    return (
        <section id="banner" className="d-inline-block w-100">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-11 mx-auto">
                    <div className="banner">
                        <div className="row d-flex justify-content-center flex-wrap">
                            {banner.map((banner) => (
                                <div className="col-lg-4 col-sm-12 banner-item">
                                    <img src={banner.img} className="banner-image" />
                                </div>
                            ))}
                            {/* <div className="col-lg-4 col-sm-12 banner-item">
                                <img src="assets/images/banners/home3banner_1.png" alt="" className="banner-image" />
                            </div>
                            <div className="col-lg-4 col-sm-12 banner-item">
                                <img src="assets/images/banners/home3banner_2.png" alt="" className="banner-image" />
                            </div>
                            <div className="col-lg-4 col-sm-12 banner-item">
                                <img src="assets/images/banners/home3banner_3.png" alt="" className="banner-image" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHomePage;
