import classNames from 'classnames';
import styles from './hero-image.module.scss';
import commonStyles from '@styles/common-styles.module.scss';

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
    imageUrl?: string;
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
    imageUrl,
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                {imageUrl && <img src={imageUrl} className={styles.image} />}
                <div className={styles.overlay}>
                    <div>
                        <div className={classNames(styles['overlay-text'], topLabelClassName)}>
                            {topLabel}
                        </div>
                        <h1 className={styles['overlay-header']}>{title}</h1>
                        <p className={styles['overlay-text']}>{bottomLabel}</p>
                        {primaryButtonLabel && (
                            <button
                                className={classNames(
                                    commonStyles.primaryButton,
                                    styles['overlay-button']
                                )}
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
