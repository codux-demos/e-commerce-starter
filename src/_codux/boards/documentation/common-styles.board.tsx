import { createBoard } from '@wixc3/react-board';
import commonStyles from '../../../styles/common-styles.module.scss';
import boardStyle from './documentation.module.scss';
import styles from './vars.module.scss';
import cx from 'classnames';
import { ProductCard } from '/src/components/product-card/product-card';
import HeroImage03Jpg from '../../../assets/img/[1024_640]_heroImage03.jpg';

export default createBoard({
    name: 'UI Kit',
    Board: () => (
        <div className={boardStyle.root}>
            <div className={styles['large-thin-title']}>HTML Elements</div>
            <div className={boardStyle.row}>
                <div className={boardStyle.box}>
                    <button className={commonStyles.primaryButton}>Primary Button</button>
                    <button className={commonStyles.secondaryButton}>Secondary Button</button>
                </div>

                <div className={boardStyle.box}>
                    Input Number
                    <input type="number" className={commonStyles.numberInput} />
                </div>
            </div>
            <div className={styles['large-thin-title']}>Components</div>

            <div className={boardStyle.row}>
                <ProductCard name={'Placeholder'} />
                <ProductCard
                    name="TV"
                    price={{ formatted: { price: '$85' } }}
                    style={{ width: '100px' }}
                    imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters-starters/img_02.jpg"
                />
                <ProductCard
                    name="TV"
                    price={{ formatted: { price: '$85' } }}
                    style={{ width: '200px' }}
                    imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters-starters/img_02.jpg"
                />
                <ProductCard
                    name="TV"
                    price={{ formatted: { price: '$85' } }}
                    style={{ width: '300px' }}
                    imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters-starters/img_02.jpg"
                />
            </div>
            <div className={styles['large-thin-title']}>Page Strips</div>
            <div className={boardStyle.row}>
                <div className={boardStyle.strip}>
                    <div className={boardStyle.section}>
                        <div className={styles['medium-paragraph']}>
                            Great Deals Are <br /> Just a Click Away
                        </div>
                    </div>
                    <div>
                        <div className={boardStyle.imageSection}>
                            <div className={boardStyle.floatingContent}>
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

            <div>
                <p className={styles.Title}>Fonts</p>
                <div className={styles['fonts-layout']}>
                    <div className={styles.flex}>
                        <p className={styles.miniTitle}>------ Title styles -----</p>
                        <div className={styles['extra-large-thin-title']}>
                            Extra large thin title
                        </div>
                        <div className={styles['large-thin-title']}>Large thin title</div>
                        <div className={styles['large-title']}>Large title</div>
                        <div className={styles['large-title-mobile']}>Large title mobile</div>
                        <div className={styles['medium-title']}>Medium title</div>
                        <div className={styles['extra-small-title']}>Extra small title</div>
                    </div>
                    <div className={styles.flex}>
                        <p className={styles.miniTitle}>------ Paragraph styles -----</p>
                        <div className={styles['extra-large-text']}>Extra Large text</div>
                        <div className={styles['large-paragraph']}>Large paragraph</div>
                        <div className={styles['medium-paragraph']}>Medium paragraph</div>
                        <div className={styles['medium-paragraph-bold']}>Medium paragraph bold</div>
                        <div className={styles['small-text-font-bold']}>Small text font bold</div>
                        <div className={styles['small-text']}>Small text</div>
                        <div className={styles['extra-small-text']}>Extra small text</div>
                    </div>
                </div>

                <p className={styles.Title}>Colors</p>
                <div className={styles.colors}>
                    <div className={styles.wrapper}>
                        <div className={cx(styles.circle, styles.white)}></div>
                        <p className={styles.miniTitle}>White</p>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cx(styles.circle, styles.snowWhite)}></div>
                        <p className={styles.miniTitle}>Snow White</p>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cx(styles.circle, styles.black)}></div>
                        <p className={styles.miniTitle}>Black</p>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cx(styles.circle, styles.charcoalBlack)}></div>
                        <p className={styles.miniTitle}>Charcoal Black</p>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
});
