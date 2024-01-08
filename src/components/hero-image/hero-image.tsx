import classNames from 'classnames';
import styles from './hero-image.module.scss';

export interface HeroImageProps {
    className?: string;
    topLabel: string;
    title: string;
    bottomLabel: string;
    buttonLabel: string;
    imageUrl: string;
}

export const HeroImage = ({
    title,
    bottomLabel,
    buttonLabel,
    topLabel,
    className,
    imageUrl
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                <img
                    src={imageUrl}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <div>
                        <p className={styles['overlay-text']}>{topLabel}</p>
                        <h1
                            className={classNames(styles['overlay-text'], styles['overlay-header'])}
                        >
                            {title}
                        </h1>
                        <p className={styles['overlay-text']}>{bottomLabel}</p>
                        <button
                            className={classNames(styles.secondaryButton, styles['overlay-button'])}
                        >
                            {buttonLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
