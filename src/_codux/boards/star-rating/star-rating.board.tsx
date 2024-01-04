import { createBoard } from '@wixc3/react-board';
import { StarRating } from '../../../components/star-rating/star-rating';

export default createBoard({
    name: 'StarRating',
    Board: () => <StarRating />,
    isSnippet: true,
});
