import classNames from 'classnames';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import styles from './drawer.module.scss';
import { ButtonPrimary } from '../button-primary/button-primary';
import { CartItem } from '../cart-item/cart-item';

export interface DrawerProps {
    className?: string;
}


export const Drawer = ({ className }: DrawerProps) => {
    return <div className={classNames(styles.root, className)}><div className={styles.header}><ArrowRightIcon className={styles.arrowIcon} />Cart</div>
        <div className={styles.body}><div className={styles.itemsList}>
            <CartItem />
            <CartItem />
        </div>
            <div>
                <div>Subtotal</div>0$</div>
        </div>
        <div className={styles.footer}>
            <ButtonPrimary className={styles.footerButton} /></div>
    </div>;
};
