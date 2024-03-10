import { createBoard } from '@wixc3/react-board';
import { AppWrapperRealData } from '../board-wrappers/app-wrapper-real-data';

export default createBoard({
    name: 'App',
    Board: () => <AppWrapperRealData />,
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
