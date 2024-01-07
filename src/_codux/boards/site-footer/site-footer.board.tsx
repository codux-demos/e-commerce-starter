import { createBoard } from '@wixc3/react-board';
import { SiteFooter } from '../../../components/site-footer/site-footer';

export default createBoard({
    name: 'SiteFooter',
    Board: () => <SiteFooter />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1190,
        windowWidth: 1024,
        windowHeight: 768
    }
});
