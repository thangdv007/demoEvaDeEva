import Button from '~/components/Button/Button';

function ProductItem({ product, swiper }) {
    return (
        <>
            <div className={swiper ? 'product-item' : 'product-item col-sm-6 col-md-4 col-lg-3'}>
                <Button to="/product">
                    <div className="image-hover">
                        <img src={product.img1} alt="" className="item-first" />
                        <img src={product.img2} alt="" className="item-second" />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                    </div>
                </Button>
            </div>
        </>
    );
}

export default ProductItem;
