import { createBoard } from '@wixc3/react-board';
import { ConnectionComponent } from '../../../components/connection-component/connection-component';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'ConnectionComponent',
    Board: () => (
        <ComponentWrapper>
            <ConnectionComponent />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
