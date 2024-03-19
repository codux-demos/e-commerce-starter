import { createBoard } from '@wixc3/react-board';
import { PageWrapperRealData } from '../../../board-wrappers/page-wrapper-real-data';
import { HomePage } from '../../../../pages/home-page/home-page';

export default createBoard({
    name: 'Page Home',
    Board: () => (
        <PageWrapperRealData>
            <HomePage />
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
