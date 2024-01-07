import { createBoard } from '@wixc3/react-board';
import Vars_module from './vars.module.scss';
import boardStyle from './documentation.module.scss';

export default createBoard({
    name: 'Vars',
    Board: () => (
        <div className={boardStyle.root}>
            <p className={Vars_module.small}>using small-font var</p>
            <p className={Vars_module.large}>using large-font var</p>
        </div>
    ),
    isSnippet: true,
});
