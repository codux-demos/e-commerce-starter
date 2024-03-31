import { createBoard } from '@wixc3/react-board';
import styles from './intro.module.scss';
import documentationStyles from '/src/_codux/boards/documentation/documentation.module.scss';

export default createBoard({
    name: 'Intro',
    Board: () => (
        <div className={documentationStyles.root}>
            <p className={styles.myStyle}>this is a section</p>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
        windowWidth: 1024,
    },
});
