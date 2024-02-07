import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../../components/site-footer/site-footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
