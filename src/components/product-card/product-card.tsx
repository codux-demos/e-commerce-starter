import classNames from 'classnames';
import styles from './product-card.module.scss';
import { products } from '@wix/stores';
import CommonStyles_module from '../../styles/common-styles.module.scss';
import noImage from '../../assets/img/noImage/[160_200]_noImage.svg'; 

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
                <img src={noImage} alt={name} className={styles.image} />
            )}
            <div className={styles.cardContent}>
                <p className={styles.description}>{name}</p>
                {price?.formatted && (
                    <p className={CommonStyles_module.price}>{price.formatted.price}</p>
                )}
            </div>
        </div>
    );
};
