import { createBoard } from '@wixc3/react-board';
import { Cart } from '../../../components/cart/cart';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper>
            <Cart />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
