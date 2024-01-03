import { createBoard } from '@wixc3/react-board';
import { PageNoRouting } from '../../board-wrappers/page-no-routing';
import { HomePage } from '../../../components/home-page/home-page';
import { ProductsPage } from '../../../components/products-page/products-page';
import { AboutPage } from '../../../components/about-page/about-page';

export default createBoard({
    name: 'About Page',
    Board: () => (
        <PageNoRouting>
            <AboutPage />
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
