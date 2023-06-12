import { Col, Row } from 'react-bootstrap';
import product from '~/assets/Images/Products';
import Breadcrumb from '~/components/Breadcrumb';
import CollectionTitle from '~/components/CollectionTitle';
import ProductItem from '~/components/Product/ProductItem';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import HomeBanner from '~/assets/Images/HomeBanner';

function ProductPage() {
    const [currentPage, setCurrentPage] = useState(0);
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
    // Hàm xử lý sự kiện thay đổi trang
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const pageCount = 12; //số lượng trnag phân trang
    // Xác định trạng thái để ẩn nhãn "<<"
    const isFirstPage = currentPage === 0;
    // Xác định trạng thái để ẩn nhãn ">>"
    const isLastPage = currentPage === pageCount - 1;
    return (
        <>
            <div className="clear-fix"></div>
            <main>
                <div id="colection" className="colection-page">
                    <div className="main-content">
                        <Breadcrumb pageName="category" />
                    </div>
                </div>
                <div className="padding-rl-40">
                    <div className="banner-collection-header">
                        <img src={HomeBanner.bannerCollection} />
                    </div>
                    <CollectionTitle />
                    <div className="clear-fix filter-here">
                        <div className="content-product-list clear-fix">
                            <div className="row">
                                <Row>
                                    <Col>
                                        <ProductItem product={products[0]} swiper={true} />
                                    </Col>
                                    <Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <ProductItem product={products[1]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[2]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[3]} swiper={true} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <ProductItem product={products[3]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[0]} swiper={true} />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Row>
                                {products.map((product) => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                                <Row>
                                    <Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <ProductItem product={products[1]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[2]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[3]} swiper={true} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <ProductItem product={products[3]} swiper={true} />
                                                </Col>
                                                <Col>
                                                    <ProductItem product={products[0]} swiper={true} />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                    <Col>
                                        <ProductItem product={products[0]} swiper={true} />
                                    </Col>
                                </Row>
                                {products.map((product) => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                            </div>
                        </div>

                        <ReactPaginate
                            nextLabel={isLastPage ? null : <FontAwesomeIcon icon={faAnglesRight} />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel={isFirstPage ? null : <FontAwesomeIcon icon={faAnglesLeft} />}
                            pageClassName="custom-page-item"
                            pageLinkClassName="page-link"
                            previousClassName="custom-page-item"
                            previousLinkClassName="page-link"
                            nextClassName="custom-page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="custom-page-item"
                            breakLinkClassName="page-link"
                            containerClassName="custom-pagination"
                            activeClassName="custom-active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductPage;
