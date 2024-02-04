import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';
import commonStyles from '../../styles/styleGuide.module.scss';
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
                <div className={styles.title}>{product.name}</div>
                {product.price && (
                    <div className={styles.price}>{product.price?.formatted?.price}</div>
                )}
                <div className={styles.quantity}>
                    <label htmlFor="quantity" className={styles.quantityLabel}>
                        Quantity
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        className={styles.quantityInput}
                        placeholder="1"
                    />
                </div>
                <button className={classNames(styles.add, commonStyles.primaryButton)}>
                    Add to Cart
                </button>
                <ShopTechnicalInfo />
            </div>
        </div>
    );
};
