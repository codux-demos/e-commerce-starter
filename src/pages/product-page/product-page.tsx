import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';
import { ButtonPrimary } from '../../components/button-primary/button-primary';

export interface ProductPageProps {
    className?: string;
}


export const ProductPage: React.FC<ProductPageProps> = ({ className }) => {
    const { id: productId } = useParams<RouteParams['/product/:id']>();

    const [product, setProduct] = useState<products.Product>();

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getProduct(productId).then((product) => {
            setProduct(product);
        });
    }, [wixApi]);

    if (!product) {
        return <div className={classNames(styles.root, className)}>The product is not found</div>;
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageAndName}>
                <div className={styles.left}>
                    <img src={product.media?.mainMedia?.image?.url} alt="" className={styles.image} />
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{product.name}</div>
                    {product.price && <div>{product.price?.formatted?.price}</div>}
                    <ButtonPrimary title="Add to Cart" />
                </div></div>
            <div className={styles.description}>{product.description}</div>
            {product.price && <div>Price: {product.price?.formatted?.price}</div>}
        </div>
    );
};
