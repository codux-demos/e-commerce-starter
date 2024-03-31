import { createBoard } from '@wixc3/react-board';
import styles from './vars.module.scss';
import cx from 'classnames';
import documentationStyles from '/src/_codux/boards/documentation/documentation.module.scss';

export default createBoard({
    name: 'Theme Variables',
    Board: () => (
        <div className={documentationStyles.root}>
            <div className={styles.colors}>
                <div>
                    <div className={cx(styles.circle, styles.white)}></div>
                    <p className={styles.circleTitle}>White</p>
                </div>
                <div>
                    <div className={cx(styles.circle, styles.black)}></div>
                    <p className={styles.circleTitle}>Black</p>
                </div>
                <div>
                    <div className={cx(styles.circle, styles.disabled)}></div>
                    <p className={styles.circleTitle}>disabled</p>
                </div>
                <div>
                    <div className={cx(styles.circle, styles.dirtyWhite)}></div>
                    <p className={styles.circleTitle}>Dirty White</p>
                </div>
            </div>
            <h1 className={styles.extraLargeTitle}>Extra Large Title</h1>
            <h2 className={styles.largeTitle}>Large Title</h2>
            <h3 className={styles.mediumTitle}>Medium Title</h3>
            <h4 className={styles.smallTitle}>Small Title</h4>
            <p className={styles.extraLargeText}>Extra Large Text</p>
            <p className={styles.largeText}>Large Text</p>
            <p className={styles.MediumText}>Small Text</p>
            <p className={styles.extraSmallText}>Extra Small Text</p>
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
