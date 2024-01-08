import classNames from 'classnames';
import styles from './hero-image.module.scss';

export interface HeroImageProps {
    className?: string;
    topLabel: string;
    title: string;
    bottomLabel: string;
    buttonLabel: string;
}

export const HeroImage = ({
    title,
    bottomLabel,
    buttonLabel,
    topLabel,
    className,
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                <img
                    src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_571,h_468,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                    alt=""
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
