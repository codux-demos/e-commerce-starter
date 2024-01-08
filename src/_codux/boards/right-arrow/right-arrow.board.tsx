import { createBoard } from '@wixc3/react-board';
import { RightArrow } from '../../../components/right-arrow/right-arrow';

export default createBoard({
    name: 'RightArrow',
    Board: () => <RightArrow />,
    isSnippet: true,
});
