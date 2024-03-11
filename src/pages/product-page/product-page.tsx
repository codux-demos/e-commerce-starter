import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import commonStyles from '../../styles/common-styles.module.scss';
import { ProductImages } from './product-images/product-images';
import { ProductInfo } from './product-info/product-info';
import { useAddToCart, useProduct } from '../../api/api-hooks';
import { useRef } from 'react';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
    const { id: productId } = useParams<RouteParams['/product/:id']>();

    const { data: product } = useProduct(productId);
    const { trigger: addToCart } = useAddToCart();
    const quantityInput = useRef<HTMLInputElement>(null);

    if (!product) {
        return (
            <div className={styles['no-product']}>
                {product === null ? 'The product is not found' : 'Loading...'}
            </div>
        );
    }

    function addToCartHandler() {
        if (!product?._id) {
            return;
        }
        const quantity = parseInt(quantityInput.current?.value || '1', 10);
        addToCart({ id: product._id, quantity });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <ProductImages
                mainImage={product.media?.mainMedia}
                images={product.media?.items}
                className={styles.left}
            />
            <div className={styles.right}>
                <div className={styles.productForm}>
                    <div className={styles.productTitle}>{product.name}</div>
                    {product.price && (
                        <div className={commonStyles.price}>{product.price?.formatted?.price}</div>
                    )}
                    <label>
                        Quantity: <br />
                        <input
                            ref={quantityInput}
                            className={commonStyles.numberInput}
                            type="number"
                            placeholder="1"
                        />
                    </label>
                    <button
                        onClick={addToCartHandler}
                        className={classNames(commonStyles.primaryButton, styles.productDetailsBtn)}
                    >
                        Add to Cart
                    </button>
                </div>
                <div className={styles.productInfo}>
                    <ProductInfo productInfo={product.additionalInfoSections} />
                </div>
            </div>
        </div>
    );
};
