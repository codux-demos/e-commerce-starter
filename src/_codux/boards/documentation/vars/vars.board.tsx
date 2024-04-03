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
            <div className={styles['fonts-layout']}>
                <div>
                    <p className={styles.circleTitle}>------ Title styles -----</p>
                    <div className={styles['extra-large-thin-title']}>Extra large thin title</div>
                    <div className={styles['extra-large-title']}>Extra large title</div>
                    <div className={styles['large-title']}>Large title</div>
                    <div className={styles['medium-title']}>Medium title</div>
                    <div className={styles['extra-small-title']}>Extra small title</div>
                </div>
                <div>
                    <p className={styles.circleTitle}>------ Paragraph styles -----</p>
                    <div className={styles['large-paragraph']}>Large paragraph</div>
                    <div className={styles['paragraph-font']}>Paragraph font</div>
                    <div className={styles['medium-paragraph-bold']}>Medium paragraph bold</div>
                    <div className={styles['small-paragraph-font']}>Small paragraph font</div>
                </div>
                <div>
                    <p className={styles.circleTitle}>------ Running text styles -----</p>
                    <div className={styles['large-text']}>Large text</div>
                    <div className={styles['small-text']}>Small text</div>
                    <div className={styles['extra-small-text']}>Extra small text</div>
                </div>
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
        windowWidth: 1400,
    },
});
