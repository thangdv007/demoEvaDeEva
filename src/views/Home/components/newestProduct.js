import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, FreeMode } from 'swiper';

import product from '~/assets/Images/Products';
import Button from '~/components/Button/Button';
import ProductItem from '~/components/Product/ProductItem';

function NewestProduct() {
    const products = [
        {
            id: 1,
            img1: product.productIndex1,
            img2: product.productIndex2,
            name: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 2,
            img1: product.productIndex3,
            img2: product.productIndex4,
            name: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 3,
            img1: product.productIndex5,
            img2: product.productIndex6,
            name: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 4,
            img1: product.productIndex7,
            img2: product.productIndex8,
            name: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
        {
            id: 5,
            img1: product.productIndex3,
            img2: product.productIndex4,
            name: 'Chân váy Midi, Dáng xòe 23SCVE079F',
            price: '1,999,000đ',
        },
    ];

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
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={4}
                            spaceBetween={40}
                            loopAdditionalSlides={1}
                            loop={true}
                            freeMode={true}
                            navigation={true}
                            modules={[Navigation, FreeMode, Autoplay]}
                        >
                            {products.map((product) => (
                                <SwiperSlide className="swiper-slide" key={product.id}>
                                    {/* <div className="product-item">
                                        <Button to="/product">
                                            <div className="image-hover">
                                                <img src={product.img1} alt="" className="item-first" />
                                                <img src={product.img2} alt="" className="item-second" />
                                            </div>
                                            <div>
                                                <h3>{product.title}</h3>
                                                <p className="price">{product.price}</p>
                                            </div>
                                        </Button>
                                    </div> */}
                                    <ProductItem key={product.id} product={product} swiper />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewestProduct;
