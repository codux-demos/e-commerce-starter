import { createBoard } from '@wixc3/react-board';
import { CartItem } from '../../../components/cart-item/cart-item';

export default createBoard({
    name: 'CartItem',
    Board: () => <CartItem />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 496,
        canvasWidth: 670
    }
});
