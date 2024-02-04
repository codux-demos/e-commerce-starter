import { createBoard } from '@wixc3/react-board';
import { Cart } from '../../../../components/cart/cart';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper>
            <Cart />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
