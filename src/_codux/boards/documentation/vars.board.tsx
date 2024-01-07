import { createBoard } from '@wixc3/react-board';
import Vars_module from './vars.module.scss';
import boardStyle from './documentation.module.scss';

export default createBoard({
    name: 'Vars',
    Board: () => (
        <div className={boardStyle.root}>
            <h1 className={Vars_module.extraLargeTitle}>Extra Large Title</h1>
            <h2 className={Vars_module.largeTitle}>Large Title</h2>
            <h3 className={Vars_module.mediumTitle}>Medium Title</h3>
            <h4 className={Vars_module.smallTitle}>Small Title</h4>
            <p className={Vars_module.extraLargeText}>Extra Large Text</p>
            <p className={Vars_module.largeText}>Large Text</p>
            <p className={Vars_module.MediumText}>Small Text</p>
            <p className={Vars_module.extraSmallText}>Extra Small Text</p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024
    }
});
