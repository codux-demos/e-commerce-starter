import { createBoard } from '@wixc3/react-board';
import Vars_module from './vars.module.scss';
import boardStyle from './documentation.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Vars',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={Vars_module.colors}>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module.white)}></div>
                    <p className={Vars_module.circleTitle}>White</p>
                </div>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module.purple)}></div>
                    <p className={Vars_module.circleTitle}>Purple</p>
                </div>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module.black)}></div>
                    <p className={Vars_module.circleTitle}>Black</p>
                </div>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module.gray)}></div>
                    <p className={Vars_module.circleTitle}>Gray</p>
                </div>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module.lightGray)}></div>
                    <p className={Vars_module.circleTitle}>Light Gray</p>
                </div>
                <div>
                    <div className={Classnames(Vars_module.circle, Vars_module['page-back'])}></div>
                    <p className={Vars_module.circleTitle}>Page Background</p>
                </div>
            </div>
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
    isSnippet: false,
    environmentProps: {
        windowWidth: 1024,
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        windowHeight: 746,
    },
});
