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
            <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg" alt="" className={styles['card-image']} />
        </div></div>;
};
