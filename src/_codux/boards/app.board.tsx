import { createBoard } from '@wixc3/react-board';
import { PageWrapperRealData } from '../board-wrappers/page-wrapper-real-data';

export default createBoard({
    name: 'App',
    Board: () => <PageWrapperRealData />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        windowWidth: 1024,
        windowHeight: 852,
    },
});
