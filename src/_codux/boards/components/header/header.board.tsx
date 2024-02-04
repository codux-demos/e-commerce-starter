import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 1,
            right: 0,
            left: 0,
        },
    },
});
