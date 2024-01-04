import classNames from 'classnames';
import styles from './card-image.module.scss';

export interface CardImageProps {
    className?: string;
    imageSrc: string;
}

export const CardImage = ({ className, imageSrc }: CardImageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['image-container']}>
            <img src={imageSrc} alt="" className={styles['card-image']} />
        </div></div>;
};
