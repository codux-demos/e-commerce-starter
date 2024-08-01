import { createBoard } from '@wixc3/react-board';
import HeroImage03Jpg from '../../../assets/img/[1024_640]_heroImage03.jpg';
import BlueJpg from '../../fake-data/images/[502_310]_blue.jpg';
import commonStyles from '../../../styles/common-styles.module.scss';
import boardStyle from './documentation.module.scss';
import styles from './vars.module.scss';
import cx from 'classnames';

export default createBoard({
    name: 'Page Strips',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={styles['large-thin-title']}>Page Strips</div>
            <div className={boardStyle.row}>
                <div className={commonStyles.dividedStrip}>
                    <div className={commonStyles.section}>
                        <div className={styles['medium-paragraph']}>
                            Great Deals Are <br /> Just a Click Away
                        </div>
                    </div>
                    <div>
                        <div className={commonStyles.imageSection}>
                            <div
                                className={cx(
                                    commonStyles.floatingContent,
                                    commonStyles.shopNowContent,
                                )}
                            >
                                <div className={styles['small-text']}>
                                    Explore our latest deals 
                                    <br />
                                    and products
                                </div>
                                <div>
                                    <button className={commonStyles.primaryButton}>Shop Now</button>
                                </div>
                            </div>
                            <img src={HeroImage03Jpg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={boardStyle.row}>
                <div className={commonStyles.strip}>
                    <div className={cx(commonStyles.floatingContent, commonStyles.exploreContent)}>
                        <div className={styles['extra-large-thin-title']}>
                            Explore What <br /> Lies Beyond
                        </div>
                        <button className={commonStyles.secondaryButton}>Contact Us</button>
                    </div>
                    <img src={BlueJpg} className={commonStyles.coverImage} />
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
});
