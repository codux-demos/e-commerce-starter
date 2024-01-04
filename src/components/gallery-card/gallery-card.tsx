import classNames from 'classnames';
import styles from './gallery-card.module.scss';
import { CardImage } from '../card-image/card-image';
import { StarRating } from '../star-rating/star-rating';

export interface GalleryCardProps {
    className?: string;
    price: number;
    currency: string;
    description: string;
    rating: number;
    raters: number;
}


export const GalleryCard = ({ className, price, currency, description, rating, raters }: GalleryCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <CardImage imageSrc="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg" />
        <div className={styles['card-content']}>
            <p className={styles['item-description']}>{description}</p>
            <p className={styles['item-price']}>{currency}{price}</p>
            <StarRating rating={rating} raters={raters} />
        </div>
    </div>;
};
