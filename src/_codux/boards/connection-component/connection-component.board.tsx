import { createBoard } from '@wixc3/react-board';
import { ConnectionComponent } from '../../../components/connection-component/connection-component';

export default createBoard({
    name: 'ConnectionComponent',
    Board: () => <ConnectionComponent />,
    isSnippet: true,
});
