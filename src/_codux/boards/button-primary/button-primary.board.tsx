import { createBoard } from '@wixc3/react-board';
import { ButtonPrimary } from '../../../components/button-primary/button-primary';

export default createBoard({
    name: 'ButtonPrimary',
    Board: () => <ButtonPrimary />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 214,
        canvasWidth: 333
    }
});
