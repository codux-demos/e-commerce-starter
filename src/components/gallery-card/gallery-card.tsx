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
}


export const GalleryCard = ({ className, price, currency, description, rating }: GalleryCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <CardImage />
        <div className={styles['card-content']}>
            <p className={styles['item-description']}>{description}</p>
            <p className={styles['item-price']}>{currency}{price}</p>
            <StarRating rating={rating}/>
        </div>
    </div>;
};
