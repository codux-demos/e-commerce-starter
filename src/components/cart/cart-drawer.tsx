import { CartItem } from './cart-item/cart-item';
import commonStyles from '@styles/common-styles.module.scss';
import styles from './cart.module.scss';
import { useCart, useCartTotals } from '../../api/api-hooks';

export function CartDrawer() {
    const { data: cart } = useCart();
    const { data: cartTotals } = useCartTotals();

    const isEmpty = !cart?.lineItems || cart.lineItems.length === 0;

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
                    Subtotal: {cartTotals?.priceSummary?.subtotal?.formattedConvertedAmount}
                </label>
                <button className={commonStyles.primaryButton}>Checkout</button>
            </div>
        </div>
    );
}
