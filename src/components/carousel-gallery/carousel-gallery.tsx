import classNames from 'classnames';
import styles from './carousel-gallery.module.scss';
import { ProductCard, GalleryCardProps } from '../product-card/product-card';
import { LeftArrow } from '../left-arrow/left-arrow';
import { RightArrow } from '../right-arrow/right-arrow';
import StyleGuide_module from '../../styles/styleGuide.module.scss';

export interface CarouselGalleryProps {
    className?: string;
    items: GalleryCardProps[];
    title: string;
    buttonLabel: string;
}

export const CarouselGallery = ({ buttonLabel, title, items, className }: CarouselGalleryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['gallery-header']}>
                <h1 className={styles['gallery-title']}>{title}</h1>
            </div>
            <div className={styles.carousel}>
                <button className={styles['gallery-side']}>
                    <LeftArrow />
                </button>
                <div className={styles['items-container']}>
                    {items.map((item) => (
                        <ProductCard
                            name={item.name}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                            ratingCount={item.ratingCount}
                            className={styles['gallery-card']}
                        />
                    ))}
                </div>
                <button className={styles['gallery-side']}>
                    <RightArrow />
                </button>
            </div>
            <div className={styles['gallery-footer']}>
                <button
                    className={classNames(
                        StyleGuide_module.primaryButton,
                        styles['gallery-viewall-button']
                    )}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
};
