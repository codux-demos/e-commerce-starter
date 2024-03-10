import classNames from 'classnames';
import commonStyles from '@styles/common-styles.module.scss';
import { useState } from 'react';
import { CartDrawer } from './cart-drawer';
import { Drawer } from '../drawer/drawer';
import CommonStyles_module from '../../styles/common-styles.module.scss';

export interface CartProps {
    className?: string;
    initialIsOpen?: boolean;
}

export const Cart = ({ className, initialIsOpen }: CartProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen || false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={CommonStyles_module.secondaryButton}>
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
