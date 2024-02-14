import classNames from 'classnames';
import commonStyles from '@styles/common-styles.module.scss';
import { useState } from 'react';
import { CartDrawer } from './cart-drawer';
import { Drawer } from '../drawer/drawer';

export interface CartProps {
    className?: string;
    initialIsOpen?: boolean;
}

export const Cart = ({ className, initialIsOpen }: CartProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen || false);

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
                    <CartDrawer />
                </Drawer>
            ) : null}
        </>
    );
};
