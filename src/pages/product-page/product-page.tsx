import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../api/WixAPIContextProvider';
import commonStyles from '../../styles/common-styles.module.scss';
import { ProductImages } from './product-images/product-images';
import { ShopTechnicalInfo } from './shop-technical-info/shop-technical-info';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
    const { id: productId } = useParams<RouteParams['/product/:id']>();
    const [product, setProduct] = useState<products.Product | null>();

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi
            .getProduct(productId)
            .then((product) => {
                setProduct(product);
            })
            .catch(() => {
                setProduct(null);
            });
    }, [wixApi]);

    if (!product) {
        return (
            <div className={styles['no-product']}>
                {product === null ? 'The product is not found' : 'Loading...'}
            </div>
        );
    }
    return (
        <div className={classNames(styles.root, className)}>
            <ProductImages
                mainImage={product.media?.mainMedia}
                images={product.media?.items}
                className={styles.left}
            />
            <div className={styles.right}>
                <div>{product.name}</div>
                {product.price && <div>{product.price?.formatted?.price}</div>}
                <label>
                    Quantity: <br />
                    <input className={commonStyles.numberInput} type="number" placeholder="1" />
                </label>
                <button
                    onClick={() => wixApi.addToCart(product._id!)}
                    className={commonStyles.primaryButton}
                >
                    Add to Cart
                </button>
                <ShopTechnicalInfo />
            </div>
        </div>
    );
};
