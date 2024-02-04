import { createBoard } from '@wixc3/react-board';
import { CartItem } from '../../../components/cart/cart-item/cart-item';
import { createCartItem, createProduct } from '../../fakeData/fakeData';

const product = createProduct();
const cartItem = createCartItem(product);

export default createBoard({
    name: 'CartItem',
    Board: () => <CartItem cartItem={cartItem} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 130,
        canvasWidth: 448,
    },
});
