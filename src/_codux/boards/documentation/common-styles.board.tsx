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
            <div className={CommonStyles_board_module.categoryContainer}>
                <div className={CommonStyles_board_module.categoryTitle}>
                    <img
                        src="https://static.wixstatic.com/media/8586f3_fa01751d235246e0951c44812f029653~mv2.png/v1/fill/w_28,h_26,al_c,lg_1,q_85,enc_auto/_.png"
                        alt=""
                    />
                    <h2 className={CommonStyles_board_module.title}>Typography</h2>
                </div>
                <p className={CommonStyles_board_module.subtitle}>
                    Defines the fonts used for headings, body text, labels, etc., including size,
                    weight, and spacing.
                </p>
            </div>
            <div className={CommonStyles_board_module.subCategortContainer}>
                <h3 className={CommonStyles_board_module.subCategoryTitle}>Font Family</h3>
                <div className={CommonStyles_board_module.divider}></div>
            </div>
            <div className={CommonStyles_board_module.CardItems}>
                <div className={CommonStyles_board_module.fontFamilySection}>
                    <span className={CommonStyles_board_module.fontExample}>Aa</span>
                    <span className={CommonStyles_board_module.fomtFamilyName}>
                        &quot;DM Sans&quot;, sans-serif
                    </span>
                </div>
            </div>
            <div className={CommonStyles_board_module.subCategortContainer}>
                <h3 className={CommonStyles_board_module.subCategoryTitle}>Main Heading / h1</h3>
                <div className={CommonStyles_board_module.divider}></div>
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
            top: 1,
            right: 0,
            bottom: 103,
            left: 0,
        },
        windowWidth: 1024,
    },
});
