import classNames from 'classnames';
import styles from './carousel-gallery.module.scss';
import { GalleryCard, GalleryCardProps } from '../gallery-card/gallery-card';
import { ButtonPrimary } from '../button-primary/button-primary

export interface CarouselGalleryProps {
    className?: string;
    items: GalleryCardProps[];
    title: string;
    buttonLabel: string;
}



export const CarouselGallery = ({ buttonLabel, title, items, className }: CarouselGalleryProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['gallery-header']}>
            <h1 className={styles['gallery-title']}>{title}</h1>
        </div>
        <div className={styles.carousel}>
            <button></button>
            <div className={styles['items-container']}>
                {items.map(item => (
                    <GalleryCard
                        description={item.description}
                        currency={item.currency}
                        price={item.price}
                        rating={item.rating}
                        raters={item.raters}
                        className={styles['gallery-card']}
                    />
                ))}</div>
            <button>Button</button>
        </div>
        <div className={styles['gallery-footer']}>
            <ButtonPrimary label={buttonLabel} className={styles['gallery-viewall-button']} />
        </div></div>;
};
