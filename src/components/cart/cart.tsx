import classNames from 'classnames';
import styles from './cart.module.scss';
import commonStyles from '@styles/styleGuide.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Drawer } from '../drawer/drawer';
import { WixAPIContext } from '../contexts/WixAPIContextProvider';
import { cart } from '@wix/ecom';
import { CartItem } from './cart-item/cart-item';

export interface CartProps {
    className?: string;
}

export const Cart = ({ className }: CartProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const wixClient = useContext(WixAPIContext);
    const [cart, setCart] = useState<cart.Cart | null>(null);
    useEffect(() => {
        wixClient.getCart().then((_cart) => {
            setCart(_cart);
        });
    }, [wixClient]);

    const isEmpty = !cart?.lineItems || cart.lineItems.length === 0;
    const totalPrice = cart?.lineItems?.reduce((acc, { price }) => {
        const itemPrice = price?.convertedAmount ? parseFloat(price?.convertedAmount) : 0;
        return acc + itemPrice;
    }, 0);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={classNames(commonStyles.primaryButton, className)}
            >
                Cart
            </button>
            {isOpen ? (
                <Drawer title="Cart" onClose={() => setIsOpen(false)}>
                    {isEmpty ? (
                        <div className={styles.placeholder}>Cart is empty</div>
                    ) : (
                        [
                            <div key="items">
                                {cart?.lineItems?.map((item) => (
                                    <CartItem key={item._id} cartItem={item} />
                                ))}
                            </div>,
                            <div key="total" className={styles.total}>
                                <div>Subtotal</div>
                                {totalPrice}
                                {cart?.currency}
                            </div>,
                            <button key="checkout" className={commonStyles.primaryButton}>
                                Checkout
                            </button>,
                        ]
                    )}
                </Drawer>
            ) : null}
        </>
    );
};
