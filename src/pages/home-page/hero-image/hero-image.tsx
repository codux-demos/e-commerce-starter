import CommonStyles_module from '../../../styles/common-styles.module.scss';
import mediumHeroImage from '../../../assets/img/[760_460]_heroImage04.jpg';
import largeHeroImage from '../../../assets/img/[1024_640]_heroImage04.jpg';
import xLargeHeroImage from '../../../assets/img/[1400_640]_heroImage04.jpg';
import classNames from 'classnames';
import styles from './hero-image.module.scss';

export interface HeroImageProps {
    className?: string;
    topLabel: string;
    topLabelClassName?: string;
    title: string;
    bottomLabel: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
}

export const HeroImage = ({
    title,
    bottomLabel,
    buttonLabel,
    onButtonClick,
    className,
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <picture>
                {/*<source media="(1400px <= width)" srcSet={xLargeHeroImage} />
                <source media="(1024px <= width)" srcSet={largeHeroImage} />
                <source media="(760px <= width)" srcSet={mediumHeroImage} />*/}
                <img
                    src="https://static.wixstatic.com/media/c837a6_60fe596fc6124c9dabbb90df008507d3~mv2.jpg/v1/fill/w_3456,h_1526,fp_0.50_0.62,q_90,usm_0.66_1.00_0.01,enc_auto/welcome%20image_2.jpg"
                    className={styles.image}
                    alt="Hero background"
                />
            </picture>
            <div className={styles.overlay}>
                <p className={styles['small-title']}>{title}</p>
                <h1 className={styles['big-title']}>{bottomLabel} </h1>
                {buttonLabel && (
                    <button
                        onClick={onButtonClick}
                        className={classNames(
                            CommonStyles_module.primaryButton,
                            styles['overlay-button'],
                        )}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
        </div>
    );
};
