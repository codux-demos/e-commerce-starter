import classNames from 'classnames';
import styles from './cart-item.module.scss';
import { useState } from 'react';
import { Counter } from '../counter/counter';

export interface CartItemProps {
    className?: string;
    name: string;
    price: number;
    prevPrice?: number;
    isLast?: boolean;
}

export const CartItem = ({
    className,
    name = 'Default Name',
    price = 97,
    prevPrice,
    isLast,
}: CartItemProps) => {
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
                <h4 className={styles.productName}>{name}</h4>
                <div className={styles.pricesBlock}>
                    {!!prevPrice && (
                        <h4 className={classNames(styles.price, styles.prevPrice)}>{prevPrice}$</h4>
                    )}
                    <h4 className={styles.price}>{price}$</h4>
                </div>
                <Counter count={count} onChange={setCount} className={styles.counter} />
            </div>
        </div>
    );
};
