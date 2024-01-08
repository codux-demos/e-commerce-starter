import { createBoard } from '@wixc3/react-board';
import { Drawer } from '../../../components/drawer/drawer';

export default createBoard({
    name: 'Drawer',
    Board: () => <Drawer />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 568,
        canvasWidth: 299
    }
});
