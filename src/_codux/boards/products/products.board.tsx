import { Products } from '../../../components/products/products';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'Products',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <Products />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        windowWidth: 1024,
        windowHeight: 768,
    },
});
