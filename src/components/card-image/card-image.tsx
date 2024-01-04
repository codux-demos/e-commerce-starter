import classNames from 'classnames';
import styles from './card-image.module.scss';

export interface CardImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CardImage = ({ className }: CardImageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['image-container']}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles['card-image']} />
        </div></div>;
};
