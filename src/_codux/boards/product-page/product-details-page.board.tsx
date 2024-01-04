import { createBoard } from '@wixc3/react-board';
import { PageNoRouting } from '../../board-wrappers/page-no-routing';
import { ProductPage } from '../../../pages/product-page/product-page';

export default createBoard({
    name: 'Product Details Page',
    Board: () => (
        <PageNoRouting>
            <ProductPage />
        </PageNoRouting>
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
