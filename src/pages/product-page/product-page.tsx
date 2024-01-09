import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';
import StyleGuide_module from '../../styles/styleGuide.module.scss';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
    const { id: productId } = useParams<RouteParams['/product/:id']>();
    const [image, setImage] = useState(0);

    const [product, setProduct] = useState<products.Product | null>();

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getProduct(productId).then((product) => {
            setProduct(product);
        }).catch(() => {
            setProduct(null);
        });
    }, [wixApi]);

    if (!product) {
        return (
            <div className={styles['no-product']}>
                {product === null ? 'The product is not found 😭😭😭' : 'Loading...'}
            </div>
        );
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageAndName}>
                <div className={styles.left}>
                    <div className={styles.mainImage}>
                        <img
                            src={product.media?.items?.at(image)?.image?.url}
                            alt={product.media?.items?.at(image)?.title}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.otherImages}>
                        {product.media?.items?.map((item, index) => {
                            return (
                                <img
                                    key={index}
                                    src={item.image?.url}
                                    alt={item.title}
                                    className={styles.otherImage}
                                    onClick={() => setImage(index)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{product.name}</div>
                    {product.price && (
                        <div className={styles.price}>{product.price?.formatted?.price}</div>
                    )}
                    <div className={styles.quantity}>
                        <label className={styles.quantityLabel}>Quantity</label>
                        <input type="number" className={styles.quantityInput} placeholder="1" />
                    </div>
                    <button className={classNames(styles.add, StyleGuide_module.primaryButton)}>
                        Add to Cart
                    </button>
                    <div className={styles.productInfoTitle}>Product Info</div>
                    <div className={styles.description}>{product.description}</div>
                </div>
            </div>
        </div>
    );
};
