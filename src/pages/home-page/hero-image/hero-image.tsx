import classNames from 'classnames';
import styles from './hero-image.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import CommonStyles_module from '../../../styles/common-styles.module.scss';
import heroImage from '../../../assets/img/[1024_640]_heroImage04.jpg';

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
                <img src={heroImage} className={styles.image} />
                <div className={styles.overlay}>
                    <div>
                        <h1 className={styles['overlay-text']}>{title}</h1>
                        <p className={styles['overlay-header']}>{bottomLabel}</p>
                        {primaryButtonLabel && (
                            <button
                                className={CommonStyles_module.secondaryButton}
                                onClick={onPrimaryButtonClick}
                            >
                                {primaryButtonLabel}
                            </button>
                        )}
                        {secondaryButtonLabel && (
                            <button
                                className={classNames(
                                    commonStyles.secondaryButton,
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
