import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, FreeMode } from 'swiper';

import product from '~/assets/Images/Products';
import Button from '~/components/Button/Button';

function NewestProduct() {
    const products = [
        {
            id: 1,
            image1: product.productIndex1,
            image2: product.productIndex2,
            title: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 2,
            image1: product.productIndex3,
            image2: product.productIndex4,
            title: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 3,
            image1: product.productIndex5,
            image2: product.productIndex6,
            title: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 4,
            image1: product.productIndex7,
            image2: product.productIndex8,
            title: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 5,
            image1: product.productIndex3,
            image2: product.productIndex4,
            title: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
    ];
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section id="events" className="events mt-2">
            <div className="container-fluid" data-aos="fade-up">
                <div className="section-title text-center">
                    <Button to="/newProducts" className="heading-title">
                        Sản phẩm mới nhất
                    </Button>
                    <p className="view-more">
                        <Button to="/products" className="">
                            Xem tất cả
                        </Button>
                    </p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-11 mx-auto">
                        {/* <div className="slides-products swiper" data-aos="fade-up" data-aos-delay={100} ref={swiperRef}>
                            <div className="swiper-button-prev" />
                            <div className="swiper-button-next" />
                            <div className="swiper-wrapper"> */}
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            rewind={true}
                            freeMode={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation, FreeMode, Autoplay]}
                            className="mySwiper"
                        >
                            {products.map((product) => (
                                <SwiperSlide className="swiper-slide" key={product.id}>
                                    <div className="product-item">
                                        <Button to="/product">
                                            <div className="image-hover">
                                                <img src={product.image1} alt="" className="item-first" />
                                                <img src={product.image2} alt="" className="item-second" />
                                            </div>
                                            <div>
                                                <h3>{product.title}</h3>
                                                <p className="price">{product.price}</p>
                                            </div>
                                        </Button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewestProduct;
