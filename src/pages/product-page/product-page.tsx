import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';
import { useContext, useEffect, useState } from 'react';
import { products } from '@wix/stores';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage = ({ className }: ProductPageProps) => {
    const { id: strId } = useParams<RouteParams['/products/:id']>();
    const productId = strId ?? '-1';

    const [product, setProduct] = useState<products.Product>();

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getProduct(productId).then((product) => {
            setProduct(product);
        });
    }, [wixApi]);

    if (!product) {
        return 'The product is not found';
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is Product Details</div>
            <div>Id: {productId}</div>
            <div>Title: {product.name}</div>
            {product.price && (
                <div>
                    Price: {product.price?.currency}{' '}
                    {product.price?.price ?? ''}
                </div>
            )}
        </div>
    );
};
