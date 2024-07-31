import { createBoard } from '@wixc3/react-board';
import commonStyles from '../../../styles/common-styles.module.scss';
import boardStyle from './documentation.module.scss';
import styles from './vars.module.scss';
import cx from 'classnames';
import { ProductCard } from '/src/components/product-card/product-card';

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

            <div>
                <p className={styles['large-thin-title']}>Typography</p>
                <div className={styles['fonts-layout']}>
                    <div className={cx(styles.flex, boardStyle.row)}>
                        <p className={cx(styles.miniTitle, styles.Title)}>Titles -</p>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 100, 65px</p>
                        <div className={styles['extra-large-thin-title']}>Heading 1</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 100, 45px</p>
                        <div className={styles['large-thin-title']}>Heading 2</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 45px</p>
                        <div className={styles['large-title']}>Heading 3</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 30px</p>
                        <div className={styles['large-title-mobile']}>Heading 4</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 300, 20px</p>
                        <div className={styles['medium-title']}>Heading 5</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 700, 11px</p>
                        <div className={cx(styles['extra-small-title'], boardStyle.row)}>
                            Heading 6
                        </div>
                        <p className={cx(styles.miniTitle, styles.Title)}>Paragraphs -</p>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 52px</p>
                        <div className={styles['large-paragraph']}>Paragraph 1</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 34px</p>
                        <div className={styles['medium-paragraph']}>Paragraph 2</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 1000, 42px</p>
                        <div className={styles['medium-paragraph-bold']}>Paragraph 1 bold</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 1000, 24px</p>
                        <div className={styles['small-text-font-bold']}>Paragraph 2 bold</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 16px</p>
                        <div className={styles['small-text']}>Small text</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 12px</p>
                        <div className={styles['extra-small-text']}>Extra small text</div>
                    </div>
                    <div className={cx(styles.flex, boardStyle.row)}>
                        <p className={cx(styles.miniTitle, styles.Title)}>Paragraphs -</p>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 52px</p>
                        <div className={styles['large-paragraph']}>Paragraph 1</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 1000, 42px</p>
                        <div className={styles['medium-paragraph-bold']}>Paragraph 2</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 34px</p>
                        <div className={styles['medium-paragraph']}>Paragraph 3</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 1000, 24px</p>
                        <div className={styles['small-text-font-bold']}>Paragraph 4</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 16px</p>
                        <div className={styles['small-text']}>Small text</div>
                        <p className={cx(styles.miniTitle, styles.Title)}>DM Sans 400, 12px</p>
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
