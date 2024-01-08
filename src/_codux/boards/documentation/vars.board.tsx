import { createBoard } from '@wixc3/react-board';
import Vars_module from './vars.module.scss';
import boardStyle from './documentation.module.scss';

export default createBoard({
    name: 'Vars',
    Board: () => (
        <div className={boardStyle.root}>
            <h1 className={Vars_module.extraLargeTitle}>Extra Large Title</h1>
            <h2 className={Vars_module.largeTitle}>Large Title 60px</h2>
            <h3 className={Vars_module.mediumTitle}>Medium Title 50px</h3>
            <h4 className={Vars_module.smallTitle}>Small Title 30px</h4>
            <p className={Vars_module.extraLargeText}>Extra Large Text 25px</p>
            <p className={Vars_module.largeText}>Large Text 20px</p>
            <p className={Vars_module.largeTextBold}>Large Text 17px</p>
            <p className={Vars_module.MediumText}>Medium Text 17px</p>
            <p className={Vars_module.smallText}>Small text 16px</p>
            <p className={Vars_module.extraSmallText}>Extra Small Text 14px</p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 758
    }
});
