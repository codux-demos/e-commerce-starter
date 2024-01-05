import classNames from 'classnames';
import styles from './card-image.module.scss';

export interface CardImageProps {
    alt?: string;
    src?: string;
    className?: string;
    imageSrc: string;
}

export const CardImage = ({ src, alt, className }: CardImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-container']}>
                {src ? (
                    <img src={src} alt={alt} className={styles['card-image']} />
                ) : (
                    <div className={styles['no-image']}>No image</div>
                )}
            </div>
        </div>
    );
};
