import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../../board-wrappers/component-wrapper';
import { Cart } from '../../../../components/cart/cart';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper
            settings={{
                numberOfCartItems: 5,
                imageToUse: '[502_310]_grey.jpg',
            }}
        >
            <Cart initialIsOpen={true} />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasHeight: 600,
        canvasWidth: 400,
    },
});
