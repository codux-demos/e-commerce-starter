import { createBoard } from '@wixc3/react-board';
import { CartItem } from '../../../components/cart-item/cart-item';

export default createBoard({
    name: 'CartItem',
    Board: () => <CartItem name="Ocean Pro 11 - 12.3 Touch Screen" price={70} prevPrice={85} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 130,
        canvasWidth: 448
    }
});
