import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../board-wrappers/page-wrapper';
import { AboutPage } from '../../../pages/about-page/about-page';

export default createBoard({
    name: 'About Page',
    Board: () => (
        <PageWrapper>
            <AboutPage />
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
