import { createBoard } from '@wixc3/react-board';
import { SiteFooter } from '../../../components/site-footer/site-footer';

export default createBoard({
    name: 'SiteFooter',
    Board: () => <SiteFooter />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1334,
        windowWidth: 1460,
        windowHeight: 768,
        canvasHeight: 428,
    }
});
