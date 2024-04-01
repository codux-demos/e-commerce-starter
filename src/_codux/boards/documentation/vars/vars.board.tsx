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
                <div className={styles['large-text']}>This is a paragraph.</div>
                <div className={styles['small-text']}>This is a paragraph.</div>
                <div className={styles['extra-small-text']}>This is a paragraph.</div>
                <div className={styles['large-paragraph']}>This is a paragraph.</div>
                <div className={styles['medium-paragraph-font']}>This is a paragraph.</div>
                <div className={styles['small-paragraph-font']}>This is a paragraph.</div>
                <div className={styles['paragraph-font']}>This is a paragraph.</div>
                <div className={styles['extra-large-thin-title']}>This is a paragraph.</div>
                <div className={styles['extra-large-title']}>This is a paragraph.</div>
                <div className={styles['large-title']}>This is a paragraph.</div>
                <div className={styles['medium-title-bold']}>This is a paragraph.</div>
                <div className={styles['medium-title']}>This is a paragraph.</div>
                <div className={styles['extra-small-title']}>This is a paragraph.</div>
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
