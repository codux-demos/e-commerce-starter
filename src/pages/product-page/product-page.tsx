import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';
import StyleGuide_module from '../../styles/styleGuide.module.scss';
import { Accordion } from '../../components/accordion/accordion';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
    const { id: productId } = useParams<RouteParams['/product/:id']>();
    const [image, setImage] = useState(0);

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
                    <Accordion
                        items={[
                            {
                                title: 'Product Info',
                                description: product.description ?? 'product has no description',
                            },
                            {
                                title: 'Return & Refund Policy',
                                description:
                                    'I`m a Return and Refund policy. I`m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
                            },
                            {
                                title: 'Shipping Info',
                                description:
                                    'I`m a shipping policy. I`m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.',
                            },
                        ]}
                        className={styles.accordion}
                    />
                </div>
            </div>
        </div>
    );
};
