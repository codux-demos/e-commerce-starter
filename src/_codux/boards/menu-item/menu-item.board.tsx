import { createBoard } from '@wixc3/react-board';
import { MenuItem } from '../../../components/menu-item/menu-item';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'MenuItem',
    Board: () => (
        <ComponentWrapper>
            <MenuItem title="Tablets" url="/tablets" />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
