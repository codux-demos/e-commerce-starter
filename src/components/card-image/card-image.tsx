import classNames from 'classnames';
import styles from './card-image.module.scss';

export interface CardImageProps {
    src?: string;
    className?: string;
}

export const CardImage = ({ src, className }: CardImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                {src ? (
                    <img src={src} alt="" className={styles['card-image']} />
                ) : (
                    <div className={styles['no-image']}>No image</div>
                )}
            </div>
        </div>
    );
};
