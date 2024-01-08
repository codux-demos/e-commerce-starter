import { createBoard } from '@wixc3/react-board';
import StyleGuide_module from '../../../styles/styleGuide.module.scss';
import boardStyle from './documentation.module.scss';


export default createBoard({
    name: 'Style Guide',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={StyleGuide_module.card}>I am card a product card</div>
            <button className={StyleGuide_module.primaryButton}>Primary Button</button>
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
