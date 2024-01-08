import classNames from 'classnames';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import styles from './drawer.module.scss';
import { ButtonPrimary } from '../button-primary/button-primary';
import { CartItem } from '../cart-item/cart-item';
import ButtonPrimary_module from '../button-primary/button-primary.module.scss';

export interface DrawerProps {
    className?: string;
}

const data = [
    { name: 'Shel 50 Class LED 4K UHD Smart TV', price: 97, prevPrice: 107 },
    { name: 'Playstation 5 + DualShock', price: 97 },
    { name: 'Playstation 5 + DualShock', price: 97 },
];

export const Drawer = ({ className }: DrawerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <ArrowRightIcon className={styles.arrowIcon} />
                Cart
            </div>
            <div className={styles.body}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.itemsList}>
                        {data.map((item, index, array) => (
                            <CartItem {...item} isLast={index === array.length - 1} />
                        ))}
                    </div>
                    <div className={styles.total}>
                        <div>Subtotal</div>0$
                    </div>
                </div>
                <div className={styles.footer}>
                    // <ButtonPrimary className={styles.footerButton} />
                </div>
            </div></div>
    );
};
