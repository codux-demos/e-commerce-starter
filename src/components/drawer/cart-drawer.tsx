import classNames from 'classnames';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import styles from './cart-drawer.module.scss';
import { CartItem } from '../cart-item/cart-item';
import { products } from '@wix/stores';
import { useMemo } from 'react';
import StyleGuide_module from '../../styles/styleGuide.module.scss';

export interface DrawerProps {
    products: Array<products.Product>;
    className?: string;
    isOpen?: boolean;
    onToggle?: () => void;
}

export const CartDrawer = ({ className, isOpen, onToggle, products }: DrawerProps) => {
    const totalPrice = useMemo(
        () =>
            products.reduce(
                (acc, { priceData }) => (priceData?.price ? acc + priceData.price : acc),
                0
            ),
        [products]
    );

    const currencySign = products[0]?.priceData?.currency;
    return (
        <div className={classNames(styles.root, { [styles.open]: isOpen }, className)}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <ArrowRightIcon onClick={onToggle} className={styles.arrowIcon} />
                    Cart
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyWrapper}>
                        <div className={styles.itemsList}>
                            {products.length > 0
                                ? products.map((item, index, array) => (
                                    <CartItem
                                        product={item}
                                        isLast={index === array.length - 1}
                                    />
                                ))
                                : 'Empty Cart'}
                        </div>
                        {totalPrice > 0 && (
                            <div className={styles.total}>
                                <div>Subtotal</div>
                                {totalPrice}
                                {currencySign}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.footer}>
                    <button className={classNames(StyleGuide_module.primaryButton, styles.checkoutButton)}>Checkout</button>
                </div>
            </div>
            <div
                onClick={onToggle}
                className={classNames(styles.background, { [styles.visible]: isOpen })}
            />
        </div>
    );
};
