import classNames from 'classnames';
import styles from './gallery-card.module.scss';
import { CardImage } from '../card-image/card-image';
import { StarRating } from '../star-rating/star-rating';
import { products } from '@wix/stores';

export interface GalleryCardProps {
    name: string;
    src?: string;
    className?: string;
    price?: products.PriceData;
    rating?: number;
    raters?: number;
}

export const GalleryCard = ({ name, src, className, price, rating, raters }: GalleryCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CardImage src={src} />
            <div className={styles['card-content']}>
                <p className={styles['item-name']}>{name}</p>
                {price?.formatted && (
                    <p className={styles['item-price']}>{price.formatted.price}</p>
                )}
                {rating && raters && <StarRating rating={rating} raters={raters} />}
            </div>
        </div>
    );
};
