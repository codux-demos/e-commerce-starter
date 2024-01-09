import classNames from 'classnames';
import styles from './cart-item.module.scss';
import { useState } from 'react';
import { Counter } from '../counter/counter';
import { products } from '@wix/stores';

export interface CartItemProps {
    className?: string;
    product: products.Product;
    isLast?: boolean;
}

export const CartItem = ({ className, product, isLast }: CartItemProps) => {
    const [count, setCount] = useState(0);

    return (
        <div className={classNames(styles.root, { [styles.divider]: !isLast }, className)}>
            <div className={styles.imageContainer}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={styles.infoContainer}>
                <h4 className={styles.productName}>{product.name}</h4>
                <div className={styles.pricesBlock}>
                    {product.priceData?.discountedPrice ? (
                        <h4 className={classNames(styles.price, styles.prevPrice)}>
                            {product.priceData?.price}$
                        </h4>
                    ) : null}
                    <h4 className={styles.price}>
                        {product.priceData?.discountedPrice
                            ? product.priceData?.discountedPrice
                            : product.priceData?.price}
                        $
                    </h4>
                </div>
                <Counter count={count} onChange={setCount} className={styles.counter} />
            </div>
        </div>
    );
};
