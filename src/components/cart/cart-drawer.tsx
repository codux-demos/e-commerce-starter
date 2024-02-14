import { cart } from '@wix/ecom';
import { Drawer } from '../drawer/drawer';
import { CartItem } from './cart-item/cart-item';
import commonStyles from '@styles/common-styles.module.scss';
import styles from './cart.module.scss';
import { useContext, useState, useEffect } from 'react';
import { WixAPIContext } from '../../api/WixAPIContextProvider';

export function CartDrawer() {
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

    return isEmpty ? (
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
    );
}
