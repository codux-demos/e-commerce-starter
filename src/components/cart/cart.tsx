import classNames from 'classnames';
import styles from './cart.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Drawer } from '../drawer/drawer';
import { WixAPIContext } from '../../api/WixAPIContextProvider';
import { cart } from '@wix/ecom';
import { CartItem } from './cart-item/cart-item';

export interface CartProps {
    className?: string;
    initialIsOpen?: boolean;
}

export const Cart = ({ className, initialIsOpen }: CartProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen || false);

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
                        <div>Cart is empty</div>
                    ) : (
                        <div className={styles.cart}>
                            <div>
                                {cart?.lineItems?.map((item) => (
                                    <CartItem key={item._id} cartItem={item} />
                                ))}
                            </div>
                            <div>
                                <label>
                                    Subtotal: {cart?.currency}
                                    {totalPrice}
                                </label>
                                <button className={commonStyles.primaryButton}>Checkout</button>
                            </div>
                        </div>
                    )}
                </Drawer>
            ) : null}
        </>
    );
};
