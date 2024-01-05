import { createBoard } from '@wixc3/react-board';
import { TopMenu } from '../../../components/top-menu/top-menu';

export default createBoard({
    name: 'TopMenu',
    Board: () => <TopMenu />,
    isSnippet: true,
});
