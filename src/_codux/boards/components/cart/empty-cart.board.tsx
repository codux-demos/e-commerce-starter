import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';
import { CartDrawer } from '../../../../components/cart/cart-drawer';

export default createBoard({
    name: 'Empty Cart',
    Board: () => (
        <ComponentWrapper settings={{ numberOfCartItems: 0 }}>
            <CartDrawer />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {

    },
});
