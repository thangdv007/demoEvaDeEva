import Button from '../Button/Button';

function ProductView(props) {
    return (
        <>
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
        </>
    );
}

export default ProductView;
