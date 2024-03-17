import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';
import { Cart } from '../../../../components/cart/cart';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper
            settings={{
                numberOfCartItems: 3,
                imageToUse: '[100_100]_grey.jpg',
            }}
        >
            <Cart initialIsOpen={true} />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasHeight: 764.5778168703083,
        canvasWidth: 1316,
        windowWidth: 1246,
        windowHeight: 768,
    },
});
