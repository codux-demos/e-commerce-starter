import { createBoard } from '@wixc3/react-board';
import { ImageTest } from '../../../components/image-test/image-test';

export default createBoard({
    name: 'ImageTest',
    Board: () => <ImageTest />,
    isSnippet: true,
});