import { createBoard } from '@wixc3/react-board';
import { CardImage } from '../../../components/card-image/card-image';

export default createBoard({
    name: 'CardImage',
    Board: () => <CardImage />,
    isSnippet: true,
});
