import { createBoard } from '@wixc3/react-board';
import { SiteWrapper } from '../../../components/site-wrapper/site-wrapper';

export default createBoard({
    name: 'SiteWrapper',
    Board: () => <SiteWrapper />,
    isSnippet: true,
});
