import product from '~/assets/Images/Products';
import Button from '~/components/Button/Button';
import ProductItem from '~/components/Product/ProductItem';

const products = [
    {
        id: 1,
        img1: product.productIndex1,
        img2: product.productIndex2,
        name: 'Đầm maxi, 23SD',
        price: '190000đ',
    },
    {
        id: 2,
        img1: product.productIndex3,
        img2: product.productIndex4,
        name: 'Đầm maxi, 23SD',
        price: '190000đ',
    },
    {
        id: 3,
        img1: product.productIndex5,
        img2: product.productIndex6,
        name: 'Đầm maxi, 23SD',
        price: '190000đ',
    },
    {
        id: 4,
        img1: product.productIndex7,
        img2: product.productIndex8,
        name: 'Đầm maxi, 23SD',
        price: '190000đ',
    },
];

function NewArrivals() {
    return (
        <div className="row m-0 align-items-center" data-aos="fade-up">
            <div className="new-arrival">
                <div className="col-lg-11 mx-auto">
                    <div className="section-title text-center">
                        <Button to="/newProduct" className="heading-title">
                            New Arrivals
                        </Button>
                        <p className="view-more">
                            <Button to="/newProduct" className="">
                                Xem tất cả
                            </Button>
                        </p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 mx-auto">
                            <div className="slides-arrival d-flex flex-wrap justify-content-center">
                                {products.map((product) => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrivals;
