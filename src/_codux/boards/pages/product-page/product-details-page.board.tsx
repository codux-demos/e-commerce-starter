import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';
import { ProductPage } from '../../../../pages/product-page/product-page';
import { ROUTES } from '../../../../router/config';

export default createBoard({
    name: 'Product Details Page',
    Board: () => (
        <PageWrapper path={ROUTES.product.to('1')}>
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
        windowWidth: 1024,
        windowHeight: 768,
    },
});
