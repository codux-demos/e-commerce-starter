import { createBoard } from '@wixc3/react-board';
import { PageNoRouting } from '../../board-wrappers/page-no-routing';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'Home Page Mobile',
    Board: () => (
        <PageNoRouting>
            <HomePage />
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
        windowWidth: 414,
        windowHeight: 896
    },
});
