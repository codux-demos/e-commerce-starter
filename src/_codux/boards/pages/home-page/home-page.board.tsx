import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '../../../board-wrappers/page-wrapper';
import { HomePage } from '../../../../pages/home-page/home-page';
import heroImage from '../../assets/img/[1024_640]_heroImage04.jpg';


export default createBoard({
    name: 'Home Page',
    Board: () => (
        <PageWrapper>
            <HomePage />
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
