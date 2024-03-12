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

    const { data: product, isLoading } = useProduct(productId);
    const { trigger: addToCart } = useAddToCart();
    const quantityInput = useRef<HTMLInputElement>(null);

    if (!product) {
        return (
            <div className={commonStyles.loading}>
                {isLoading ? 'Loading...' : 'The product is not found'}
            </div>
        );
    }

    function addToCartHandler() {
        if (!product?._id) {
            return;
        }
        const quantity = parseInt(quantityInput.current?.value || '1', 10);
        const options: Record<string, string> = {};
        //we are selecting here the first option for each product
        //most products in the default store do not have options.
        //but, for those who do, we need to specify the option value when we add to cart.
        product.productOptions?.forEach((option) => {
            if (option.name && option.choices?.length && option.choices[0].value) {
                options[option.name] = option.choices[0].value;
            }
        });
        addToCart({ id: product._id, quantity, options });
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
