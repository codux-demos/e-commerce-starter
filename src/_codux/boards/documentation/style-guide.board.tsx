import { createBoard } from '@wixc3/react-board';
import StyleGuide_module from '../../../styles/styleGuide.module.scss';
import boardStyle from './documentation.module.scss';
import Classnames from 'classnames';


export default createBoard({
    name: 'Style Guide',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={StyleGuide_module.card}>I am card a product card</div>
            <div className={boardStyle.box}>
                <button className={StyleGuide_module.primaryButton}>Primary Button</button>
                <button className={StyleGuide_module.secondaryButton}>Secondary Button</button>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasHeight: 52,
        canvasMargin: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    },
});
