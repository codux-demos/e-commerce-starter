import { createBoard } from '@wixc3/react-board';
import { ProductsPage } from '../../../../pages/products-page/products-page';
import { PageWrapperRealData } from '../../../board-wrappers/page-wrapper-real-data';

export default createBoard({
    name: 'Page Products Real Data',
    Board: () => (
        <PageWrapperRealData>
            <ProductsPage />
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
        windowWidth: 1024,
        windowHeight: 768,
    },
});
