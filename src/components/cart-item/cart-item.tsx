import classNames from 'classnames';
import styles from './cart-item.module.scss';
import { useState } from 'react';
import { Counter } from '../counter/counter';

export interface CartItemProps {
    className?: string;
    name: string;
    price: number;
}


export const CartItem = ({ className, name = 'Default Name', price = 97 }: CartItemProps) => {
    const [count, setCount] = useState(0);
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageContainer}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={styles.infoContainer}>
                <h4 className={styles.productName}>{name}</h4>
                <h4 className={styles.price}>{price}$</h4>
                <div></div>
                <Counter count={count} onChange={setCount} className={styles.counter} />
            </div></div>
    );
};
