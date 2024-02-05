import { createBoard } from '@wixc3/react-board';
import ThemeStyles from './vars.module.scss';
import boardStyle from './documentation.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Theme Variables',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={ThemeStyles.colors}>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.white)}></div>
                    <p className={ThemeStyles.circleTitle}>White</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.black)}></div>
                    <p className={ThemeStyles.circleTitle}>Black</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.disabled)}></div>
                    <p className={ThemeStyles.circleTitle}>disabled</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.dirtyWhite)}></div>
                    <p className={ThemeStyles.circleTitle}>Dirty White</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.blue)}></div>
                    <p className={ThemeStyles.circleTitle}>Blue</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.red)}></div>
                    <p className={ThemeStyles.circleTitle}>Red</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.orange)}></div>
                    <p className={ThemeStyles.circleTitle}>Orange</p>
                </div>
                <div>
                    <div className={Classnames(ThemeStyles.circle, ThemeStyles.goldYellow)}></div>
                    <p className={ThemeStyles.circleTitle}>Yellow</p>
                </div>
            </div>
            <h1 className={ThemeStyles.extraLargeTitle}>Extra Large Title</h1>
            <h2 className={ThemeStyles.largeTitle}>Large Title</h2>
            <h3 className={ThemeStyles.mediumTitle}>Medium Title</h3>
            <h4 className={ThemeStyles.smallTitle}>Small Title</h4>
            <p className={ThemeStyles.extraLargeText}>Extra Large Text</p>
            <p className={ThemeStyles.largeText}>Large Text</p>
            <p className={ThemeStyles.MediumText}>Small Text</p>
            <p className={ThemeStyles.extraSmallText}>Extra Small Text</p>
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
