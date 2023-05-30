import Slides from '~/assets/Images/slides';

function Slider() {
    const slider = [
        {
            id: 1,
            image: Slides.slide1,
        },
        {
            id: 2,
            image: Slides.slide2,
        },
    ];
    return (
        <section id="slider">
            <div className="row m-0 d-inline-block">
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    data-bs-interval={2000}
                    data-aos="fade-up"
                >
                    <div className="carousel-inner">
                        {slider.map((slide) => (
                            <div className={`carousel-item ${slide.id === 1 ? 'active' : ''}`} key={slide.id}>
                                <img src={slide.image} className="d-block w-100" alt="" />
                            </div>
                        ))}
                        {/* <div className="carousel-item active">
                            <img src="assets/images/slides/slideshow_1.png" className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/slides/slideshow_2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/slides/slideshow_1.png" className="d-block w-100" alt="..." />
                        </div> */}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;
