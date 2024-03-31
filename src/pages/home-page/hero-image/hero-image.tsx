import CommonStyles_module from '../../../styles/common-styles.module.scss';
import smallHeroImage from '../../../assets/img/[430_340]_heroImage04.jpg';
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
    primaryButtonLabel?: string;
    onPrimaryButtonClick?: () => void;
    secondaryButtonLabel?: string;
    onSecondaryButtonClick?: () => void;
}

export const HeroImage = ({
    title,
    bottomLabel,
    primaryButtonLabel,
    onPrimaryButtonClick,
    secondaryButtonLabel,
    onSecondaryButtonClick,
    topLabel,
    topLabelClassName,
    className,
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                <picture>
                    <source media="(1400px <= width)" srcSet={xLargeHeroImage} />
                    <source media="(1024px <= width)" srcSet={largeHeroImage} />
                    <source media="(760px <= width)" srcSet={mediumHeroImage} />
                    <img src={smallHeroImage} className={styles.image} alt="Hero background" />
                </picture>
                <div className={styles.overlay}>
                    <div>
                        <p className={styles['small-title']}>{title}</p>
                        <h1 className={styles['big-title']}>{bottomLabel} </h1>
                        {primaryButtonLabel && (
                            <button
                                onClick={onPrimaryButtonClick}
                                className={CommonStyles_module.primaryButton}
                            >
                                {primaryButtonLabel}
                            </button>
                        )}
                        {secondaryButtonLabel && (
                            <button
                                className={classNames(
                                    CommonStyles_module.primaryButton,
                                    styles['overlay-button']
                                )}
                                onClick={onSecondaryButtonClick}
                            >
                                {secondaryButtonLabel}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
