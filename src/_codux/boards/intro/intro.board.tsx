import { createBoard } from '@wixc3/react-board';
import styles from './intro.module.scss';
import Classnames from 'classnames';
import CommonStyles_module from '../../../styles/common-styles.module.scss';

export default createBoard({
    name: '🌱 intro',
    Board: () => (
        <div className={styles.container}>
            <p className={styles.myStyle}>
                HOW TO USE <br /> E-COMMERCE STARTER?
            </p>
            <p className={styles.myParagraph}>
                Welcome to Codux e-commerce starter. <br /> This template was built to help you
                create your own store easily. Use Codux to design your website the way you want, and
                Wix Headless e-commerce services to manage your store.
                <button className={CommonStyles_module['intro-button']}>Learn more</button>
            </p>
        </div>
    ),
    isSnippet: false,
    environmentProps: { windowWidth: 1024, windowHeight: 768 },
});
