import { createBoard } from '@wixc3/react-board';
import { PageNoRouting } from '../../board-wrappers/page-no-routing';
import { ProductsPage } from '../../../pages/products-page/products-page';

export default createBoard({
    name: 'Products Page',
    Board: () => (
        <PageNoRouting>
            <ProductsPage />
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
