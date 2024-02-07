import { createBoard } from '@wixc3/react-board';
import { CartItem } from '../../../../components/cart/cart-item/cart-item';
import { createCartItem, createProduct } from '../../../fakeData/fakeData';

const product = createProduct();
const cartItem = createCartItem(product);

export default createBoard({
    name: 'Cart Item',
    Board: () => <CartItem cartItem={cartItem} />,
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
