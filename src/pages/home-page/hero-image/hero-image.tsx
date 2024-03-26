import classNames from 'classnames';
import styles from './hero-image.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import CommonStyles_module from '../../../styles/common-styles.module.scss';
import smallHeroImage from '../../../assets/img/[420_340]_heroImage04.jpg';
import mediumHeroImage from '../../../assets/img/[760_460]_heroImage04.jpg';
import largeHeroImage from '../../../assets/img/[1024_640]_heroImage04.jpg';
import xLargeHeroImage from '../../../assets/img/[1400_640]_heroImage04.jpg';

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
                    <source media="(min-width: 1400px)" srcSet={xLargeHeroImage} />
                    <source media="(min-width: 1024px)" srcSet={largeHeroImage} />
                    <source media="(min-width: 760px)" srcSet={mediumHeroImage} />
                    <img src={smallHeroImage} className={styles.image} alt="Hero background" />
                </picture>
                <div className={styles.overlay}>
                    <div>
                        <h1 className={styles['overlay-text']}>{title}</h1>
                        <p className={styles['overlay-header']}>{bottomLabel}</p>
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
