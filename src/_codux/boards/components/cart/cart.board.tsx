import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';
import { CartDrawer } from '../../../../components/cart/cart-drawer';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper settings={{ numberOfCartItems: 5 }}>
            <CartDrawer />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasHeight: 600,
        canvasWidth: 400,
    },
});
