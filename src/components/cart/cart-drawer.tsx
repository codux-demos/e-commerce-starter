import { CartItem } from './cart-item/cart-item';
import commonStyles from '@styles/common-styles.module.scss';
import styles from './cart.module.scss';
import { useCart } from '../../api/api-hooks';

export function CartDrawer() {
    const { data: cart } = useCart();

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
