import { createBoard } from '@wixc3/react-board';
import styles from './vars.module.scss';
import cx from 'classnames';
import documentationStyles from '/src/_codux/boards/documentation/documentation.module.scss';

export default createBoard({
    name: 'Vars',
    Board: () => (
        <div className={documentationStyles.root}>
            <div className={styles.colors}>
                <div className={styles.wraper}>
                    <div className={cx(styles.circle, styles.white)}></div>
                    <p className={styles.circleTitle}>White</p>
                </div>
                <div className={styles.wraper}>
                    <div className={cx(styles.circle, styles.black)}></div>
                    <p className={styles.circleTitle}>Black</p>
                </div>
                <div className={styles.wraper}>
                    <div className={cx(styles.circle, styles.charcoalBlack)}></div>
                    <p className={styles.circleTitle}>Charcoal Black</p>
                </div>
                <div className={styles.wraper}>
                    <div className={cx(styles.circle, styles.snowWhite)}></div>
                    <p className={styles.circleTitle}>Snow White</p>
                </div>
            </div>
            <div>
                Text
                <h1>Heading 1</h1>
                <p>This is a paragraph.</p>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
