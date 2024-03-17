import classNames from 'classnames';
import styles from './cart-item.module.scss';
import { cart } from '@wix/ecom';
import { ChangeEvent } from 'react';
import commonStyles from '../../../styles/common-styles.module.scss';
import { getImageHttpUrl } from '../../../api/wix-image';
import { useRemoveItemFromCart, useUpdateCartItemQuantity } from '../../../api/api-hooks';
import { TrashIcon } from '@radix-ui/react-icons';

export interface CartItemProps {
    className?: string;
    isLast?: boolean;
    cartItem: cart.LineItem;
}

export const CartItem = ({ cartItem, className, isLast }: CartItemProps) => {
    const name = cartItem.productName?.translated || '';
    const imageUrl = getImageHttpUrl(cartItem.image, 100, 100);

    const { trigger: updateQuantity } = useUpdateCartItemQuantity();
    const { trigger: removeItem } = useRemoveItemFromCart();

    function updateQuantityHandler(e: ChangeEvent<HTMLInputElement>) {
        if (!cartItem._id) {
            return;
        }
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            updateQuantity({ id: cartItem._id, quantity: newQuantity });
        }
    }

    return (
        <div className={classNames(styles.root, { [styles.divider]: !isLast }, className)}>
            <img src={imageUrl} alt={name || ''} className={styles.image} />
            <div className={styles.infoContainer}>
                <h4 className={styles.description}>{name}</h4>

                <span className={commonStyles.price}>
                    {cartItem.price?.formattedConvertedAmount}
                </span>

                <div className={styles.container}>
                    <input
                        type="number"
                        value={cartItem.quantity}
                        onChange={updateQuantityHandler}
                        min={0}
                        className={commonStyles.numberInput}
                    />
                    <button
                        onClick={() => removeItem(cartItem._id!)}
                        aria-label="Remove item"
                        className={styles.garbage}
                    >
                        <TrashIcon height={25} width={25} />
                    </button>
                </div>
            </div>
        </div>
    );
};
