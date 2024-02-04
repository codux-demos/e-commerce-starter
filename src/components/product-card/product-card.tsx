import classNames from 'classnames';
import styles from './product-card.module.scss';
import { products } from '@wix/stores';

export interface GalleryCardProps {
    name: string;
    imageUrl?: string;
    className?: string;
    price?: products.PriceData;
}

export const ProductCard = ({ name, imageUrl, className, price }: GalleryCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {imageUrl ? (
                <img src={imageUrl} alt={name} className={styles.image} />
            ) : (
                <div className={styles.noImage}>No image</div>
            )}
            <div className={styles.cardContent}>
                <p>{name}</p>
                {price?.formatted && <p>{price.formatted.price}</p>}
            </div>
        </div>
    );
};
