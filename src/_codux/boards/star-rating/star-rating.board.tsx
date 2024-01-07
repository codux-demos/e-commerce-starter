import { createBoard } from '@wixc3/react-board';
import { StarRating } from '../../../components/star-rating/star-rating';

export default createBoard({
    name: 'StarRating',
    Board: () => <StarRating rating={4.5} ratingCount={234} />,
    isSnippet: true,
});
