import commonStyles from '@styles/common-styles.module.scss';
import classNames from 'classnames';
import CommonStyles_module from '../../../styles/common-styles.module.scss';
import styles from './card.module.scss';

export interface CardProps {
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

export const Card = ({
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
}: CardProps) => {
    return (
        <div className={styles['image-container']}>
            {imageUrl && <img src={imageUrl} className={styles.image} />}
            <div className={styles.overlay}>
                <div className={styles['top-label-highlighted']}>{topLabel}</div>
                <h1 className={styles['overlay-text-small']}>{title}</h1>
                <p className={styles['overlay-header-small']}>{bottomLabel}</p>
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
    );
};
