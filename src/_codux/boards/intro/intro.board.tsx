import { createBoard } from '@wixc3/react-board';
import styles from './intro.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: '🌱 intro',
    Board: () => (
        <div className={styles.root}>
            <p className={styles.myStyle}>How to use e-commerce starter?</p>
            <p className={styles.myParagraph}>
                Welcome to Codux e-commerce starter. This template was built to help you create your
                own store easily. Use Codux to design your website the way you want, and Wix
                Headless e-commerce services to manage your store. Learn more about it here.{' '}
            </p>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: { right: 0, left: 0, top: 1 },
        windowWidth: 1024,
        windowHeight: 768,
    },
});
