import product from '~/assets/Images/Products';
import ProductItem from '../Product/ProductItem';

function ListProductRelated() {
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
    return (
        <>
            <div className="clearfix"></div>
            <div className="box-pro-detail">
                <div className="list-pro-related">
                    <div className="sectionTitle">
                        <h2 className="heading-title">có thể bạn sẽ thích</h2>
                    </div>
                    <div className="row">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProductRelated;
