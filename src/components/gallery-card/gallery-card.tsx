import classNames from 'classnames';
import styles from './gallery-card.module.scss';
import { CardImage } from '../card-image/card-image';
import { StarRating } from '../star-rating/star-rating';
import { products } from '@wix/stores';

export interface GalleryCardProps {
    name: string;
    imageUrl?: string;
    className?: string;
    price?: products.PriceData;
    rating?: number;
    ratingCount?: number;
}

export const GalleryCard = ({ name, imageUrl, className, price, rating, ratingCount }: GalleryCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CardImage src={imageUrl} alt={name} />
            <div className={styles['card-content']}>
                <p className={styles['item-name']}>{name}</p>
                {price?.formatted && (
                    <p className={styles['item-price']}>{price.formatted.price}</p>
                )}
                {rating && ratingCount && <StarRating rating={rating} ratingCount={ratingCount} />}
            </div>
        </div>
    );
};
