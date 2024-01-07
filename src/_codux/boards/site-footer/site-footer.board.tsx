import { createBoard } from '@wixc3/react-board';
import { SiteFooter } from '../../../components/site-footer/site-footer';

export default createBoard({
    name: 'SiteFooter',
    Board: () => <SiteFooter />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1334,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 428,
    }
});
