import React, { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { CartDrawer } from '../../../components/drawer/cart-drawer';

export default createBoard({
    name: 'CartDrawer',
    Board: () => {
        const [isOpen, setIsOpen] = useState(true);
        const toggle = () => setIsOpen((open) => !open);
        return (
            <div>
                <button onClick={toggle}>Toggle Drawer</button>
                <CartDrawer products={[]} isOpen={isOpen} onToggle={toggle} />
            </div>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasHeight: 642,
        canvasWidth: 1033,
    },
});
