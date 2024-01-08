import { createBoard } from '@wixc3/react-board';
import { LeftArrow } from '../../../components/left-arrow/left-arrow';

export default createBoard({
    name: 'LeftArrow',
    Board: () => <LeftArrow />,
    isSnippet: true,
});
