import classNames from 'classnames';
import styles from './cart-item.module.scss';
import { cart } from '@wix/ecom';
import { ChangeEvent, useContext } from 'react';
import { WixAPIContext } from '../../../api/WixAPIContextProvider';
import commonStyles from '../../../styles/common-styles.module.scss';

export interface CartItemProps {
    className?: string;
    isLast?: boolean;
    cartItem: cart.LineItem;
}

export const CartItem = ({ cartItem, className, isLast }: CartItemProps) => {
    const wixClient = useContext(WixAPIContext);

    const name = cartItem.productName?.translated || '';

    function updateQuantity(e: ChangeEvent<HTMLInputElement>) {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            wixClient.updateCartItemQuantity(cartItem._id, newQuantity);
        }
    }

    return (
        <div className={classNames(styles.root, { [styles.divider]: !isLast }, className)}>
            <img src={cartItem.image} alt={name || ''} className={styles.image} />
            <div className={styles.infoContainer}>
                <h4>{name}</h4>
                <span>{cartItem.price?.formattedConvertedAmount}</span>
                <br />
                <input
                    type="number"
                    className={commonStyles.numberInput}
                    value={cartItem.quantity}
                    onChange={updateQuantity}
                    min={0}
                />
            </div>
        </div>
    );
};
