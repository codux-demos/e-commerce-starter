import { createBoard } from '@wixc3/react-board';
import { CartItem, CartItemProps } from '../../../../components/cart/cart-item/cart-item';
import { ReactNode } from 'react';
import { useCart } from '../../../../api/api-hooks';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';

function CartItemWrapper(props: { children: (cartItem: CartItemProps['cartItem']) => ReactNode }) {
    const { data: cart } = useCart();
    const cartItem = cart?.lineItems[0];
    if (!cartItem) {
        return null;
    }
    return props.children(cartItem);
}

export default createBoard({
    name: 'Cart Item',
    Board: () => (
        <ComponentWrapper>
            <CartItemWrapper>{(cartItem) => <CartItem cartItem={cartItem} />}</CartItemWrapper>
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
