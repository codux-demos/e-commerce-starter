import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';
import { ProductPage } from '../../../../pages/product-page/product-page';

export default createBoard({
    name: 'Page Product Details',
    Board: () => (
        <PageWrapper settings={{ imagesListToLoop: 'blue' }}>
            <ProductPage />
        </PageWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
