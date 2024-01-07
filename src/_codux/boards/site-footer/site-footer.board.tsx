import { createBoard } from '@wixc3/react-board';
import { SiteFooter } from '../../../components/site-footer/site-footer';

export default createBoard({
    name: 'SiteFooter',
    Board: () => <SiteFooter />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1334, canvasHeight: 428,
        canvasMargin: {
            top: 0, right: 0, bottom: 0, left: 0
        },
        windowWidth: 1024,
        windowHeight: 768
    }
});
