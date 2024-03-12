import commonStyles from '@styles/common-styles.module.scss';
import { useState } from 'react';
import { Drawer } from '../drawer/drawer';
import CommonStyles_module from '../../styles/common-styles.module.scss';
import { useCart, useCartTotals } from '../../api/api-hooks';
import { CartItem } from './cart-item/cart-item';
import styles from './cart.module.scss';

export interface CartProps {
    className?: string;
    initialIsOpen?: boolean;
}

export const Cart = ({ className, initialIsOpen }: CartProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen || false);
    const { data: cart } = useCart();
    const { data: cartTotals } = useCartTotals();
    const isEmpty = !cart?.lineItems || cart.lineItems.length === 0;

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={CommonStyles_module.secondaryButton}>
                Cart
            </button>
            {isOpen ? (
                <Drawer title="Cart" onClose={() => setIsOpen(false)} initialIsOpen={initialIsOpen}>
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
                                    Subtotal:{' '}
                                    {cartTotals?.priceSummary?.subtotal?.formattedConvertedAmount}
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
