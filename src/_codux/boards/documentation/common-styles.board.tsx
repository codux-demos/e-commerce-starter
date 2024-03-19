import { createBoard } from '@wixc3/react-board';
import commonStyles from '../../../styles/common-styles.module.scss';
import boardStyle from './documentation.module.scss';
import CommonStyles_board_module from './common-styles.board.module.scss';

export default createBoard({
    name: 'Theme Styles',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={CommonStyles_board_module.styleGuideHeader}>
                <div>
                    <h1 className={CommonStyles_board_module.styleGuideTitle}>Style Guide</h1>
                </div>
                <div className={CommonStyles_board_module.logoContainer}>
                    <div className={CommonStyles_board_module.logoContainer}>
                        <div className={CommonStyles_board_module.IconLogo} />
                        LOGO
                    </div>
                </div>
            </div>
            <div className={boardStyle.box}>
                <button className={commonStyles.primaryButton}>Primary Button</button>
                <button className={commonStyles.secondaryButton}>Secondary Button</button>
            </div>
            <div className={boardStyle.box}>
                Input Number
                <input type="number" className={commonStyles.numberInput} />
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
            right: 0,
        },
    },
});
