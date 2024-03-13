import { createBoard } from '@wixc3/react-board';
import { ProductPage } from '../../../../pages/product-page/product-page';
import { PageWrapperRealData } from '../../../board-wrappers/page-wrapper-real-data';
import { ROUTES } from '../../../../router/config';
import { WixAPI } from '../../../../api/wix-api-context-provider';

export default createBoard({
    name: 'Page Product Details Real Data',
    Board: () => {
        async function getProductPath(wixClient: WixAPI) {
            const productId = await wixClient
                .getPromotedProducts()
                .then((products) => products[0]._id);
            if (!productId) {
                throw new Error('No product found');
            }
            return ROUTES.product.to(productId);
        }
        return (
            <PageWrapperRealData route={ROUTES.product.route} path={getProductPath}>
                <ProductPage />
            </PageWrapperRealData>
        );
    },
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
