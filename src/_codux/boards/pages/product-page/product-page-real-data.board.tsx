import { createBoard } from '@wixc3/react-board';
import { ProductPage } from '../../../../pages/product-page/product-page';
import { PageWrapperRealData } from '../../../board-wrappers/page-wrapper-real-data';

export default createBoard({
    name: 'Product Page Real Data',
    Board: () => (
        <PageWrapperRealData>
            <ProductPage />
        </PageWrapperRealData>
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
