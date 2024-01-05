import { createBoard } from '@wixc3/react-board';
import { StarIcon } from '../../../components/star-icon/star-icon';

export default createBoard({
    name: 'StarIcon',
    Board: () => <StarIcon />,
    isSnippet: true,
});
