import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import product from '~/assets/Images/Products';
import { SvgComponent1 } from '~/assets/SVG';
import Breadcrumb from '~/components/Breadcrumb';
import Button from '~/components/Button/Button';
import ImageMagnifier from '~/components/ImageMagnifier';
import ListProductRelated from '~/components/ListProductRelarated';
import { addToCart } from '~/redux/actions/cartActions';

function ProductDetails() {
    const productDetail = {
        id: 1,
        title: 'Quần dài, Ống suông 23SQDE016R',
        sku: '23SQDE016R',
        price: '1999000',
        salePrice: '18595',
        description: 'Quần dài ống suông đen, phù hợp với những ngày tới công sở, mix&match với sơ mi và áo kiểu',
        colors: 'Trắng',
        material: 'Lưới',
        images: {
            image1: product.productImg1,
            image2: product.productImg2,
            image3: product.productIndex1,
            image4: product.productIndex3,
        },
        size: [
            { name: 'S', quantity: 10 },
            { name: 'M', quantity: 0 },
            { name: 'L', quantity: 0 },
            { name: 'XL', quantity: 2 },
        ],
    };

    const scrollTargetRefs = useRef([]);
    const [isSelectedColor, setIsSelectedColor] = useState(false);
    const [isSelectedSize, setIsSelectedSize] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [isSelectedMaterial, setIsSelectedMaterial] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState();
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const hanldeSelectedSize = (index) => {
        setIsSelectedSize(index);
        setSelectedSize(productDetail.size[index - 1].name);
    };

    const handleThumbnailClick = (index) => {
        if (scrollTargetRefs.current[index]) {
            scrollTargetRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAddToCart = () => {
        //kiểm tra xem đã chọn đủ size , màu sắc chưa
        if (!isSelectedColor || isSelectedSize === 0 || !isSelectedMaterial) {
            alert('Vui lòng chọn đủ màu sắc, size, và chất liệu trước khi thêm vào giỏ hàng');
            return;
        }
        const selectedProduct = {
            id: productDetail.id,
            title: productDetail.title,
            price: productDetail.price,
            material: productDetail.material,
            color: productDetail.colors,
            size: selectedSize,
            sku: productDetail.sku,
            img: productDetail.images.image1,
            quantity,
        };

        dispatch(addToCart(selectedProduct));
        //chuyển hướng đến giỏ hàng
        navigate('/cart');
    };

    return (
        <>
            <div id="product" className="productDetail-Page clear-fix">
                <Breadcrumb pageName="productDetails" />
                <div className="padding-rl-40">
                    <Row>
                        <Col xs lg="1" className={isScrolled ? 'scrolled-pro' : ''}>
                            {[1, 2, 3, 4].map((index) => (
                                <Col
                                    className="mb-2 gallery-small"
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <img src={productDetail.images[`image${index}`]} alt={`Product Image ${index}`} />
                                </Col>
                            ))}
                        </Col>
                        <Col className="mb-5 me-2">
                            {[1, 2, 3, 4].map((index) => (
                                <Col key={index} ref={(el) => (scrollTargetRefs.current[index] = el)}>
                                    <ImageMagnifier
                                        src={productDetail.images[`image${index}`]}
                                        alt={`Product Image ${index}`}
                                    />
                                </Col>
                            ))}
                        </Col>
                        <Col md="auto" lg="4" className={isScrolled ? 'scrolled-pro-right' : ''}>
                            <div className="name-productDetail">
                                <h1>{productDetail.title}</h1>
                            </div>
                            <div className="sku-product">
                                <label>SKU: </label>&nbsp;
                                <span>{productDetail.sku}</span>
                            </div>
                            <div className="infoPrice">
                                <div className="price-preview">
                                    <div className="pro-price">
                                        <label>{productDetail.price}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="des-product">
                                <h2 className="title-product">
                                    <span>Thông tin sản phẩm:</span>
                                </h2>
                                <div className="description">
                                    {productDetail.description}
                                    <p>Màu sắc: {productDetail.colors}</p>
                                    <p>Chất liệu: {productDetail.material}</p>
                                    <p>
                                        Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể
                                        chênh lệch 2-5% so với màu thật của sản phẩm, quý khách vui lòng thông cảm! Sản
                                        phẩm không kèm phụ kiện mix&match.
                                    </p>
                                    <p>
                                        <Button to="/" text>
                                            Hướng dấn bảo quản, giặt là
                                        </Button>
                                    </p>
                                </div>
                            </div>
                            <form className="clear-fix">
                                <div className="seclect-product">
                                    <div className="select-detail clear-fix">
                                        <div className="select-color clear-fix">
                                            <div className="title-color">
                                                <span>{productDetail.colors}</span>
                                            </div>
                                            <div
                                                className={`sel-color ${isSelectedColor ? 'selected' : ''}`}
                                                onClick={() => setIsSelectedColor(true)}
                                            >
                                                <label className="label-color">
                                                    <span>
                                                        <img src={productDetail.images[`image1`]} alt="Product Color" />
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="select-color clear-fix">
                                            {productDetail.size.map((size, index) => (
                                                <div
                                                    className={`sel-color ${
                                                        isSelectedSize === index + 1 ? 'selected-size' : ''
                                                    } ${size.quantity === 0 ? 'disabled' : ''}`}
                                                    onClick={() => hanldeSelectedSize(index + 1)}
                                                    key={index}
                                                >
                                                    <label>
                                                        <span>{size.name}</span>
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="guide-size">
                                                <Button to="/" text>
                                                    Hướng dẫn chọn size
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="select-color clear-fix">
                                            <div
                                                className={`sel-color ${isSelectedMaterial ? 'selected-size' : ''}`}
                                                onClick={() => setIsSelectedMaterial(true)}
                                            >
                                                <label>
                                                    <span>{productDetail.material}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="selector-action">
                                    <div className="quantity-choose clearfix">
                                        <input
                                            type="button"
                                            className="qty-btn"
                                            defaultValue="-"
                                            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                                        />
                                        <input type="text" className="qty-number" value={quantity} readOnly />
                                        <input
                                            type="button"
                                            className="qty-btn"
                                            defaultValue="+"
                                            onClick={() => setQuantity(Math.min(quantity + 1, 7))}
                                        />
                                    </div>
                                    <div className="wrap-addcart clearfix">
                                        <Button large className="btn-addtocart" onClick={handleAddToCart} readOnly>
                                            Mua ngay
                                        </Button>
                                        <div className="storeNew">
                                            <Link to="/" className="viewStore">
                                                <SvgComponent1 />
                                                DANH SÁCH
                                                <br />
                                                STORE CÒN HÀNG
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="hotline-product">
                                <span className="title-hotline">
                                    MUA HÀNG ONLINE&nbsp;
                                    <a href="tel:0966821574" title="0966821574">
                                        0966821574
                                    </a>
                                </span>
                                &nbsp;
                                <span className="time-work">Miễn phí từ (8:30 - 17:30) mỗi ngày</span>
                            </div>
                            <div className="share-post">
                                <div className="title-com">
                                    <h4>Nhận xét về sản phẩm&nbsp;{productDetail.title}</h4>
                                    <span className="share-title">Cảm nhận về sản phẩm:</span>
                                </div>
                            </div>
                            <div className="fb-comments">Bình luận trên fb</div>
                        </Col>
                    </Row>
                    <ListProductRelated />
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
