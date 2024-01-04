import classNames from 'classnames';
import styles from './carousel-gallery.module.scss';
import { GalleryCard, GalleryCardProps } from '../gallery-card/gallery-card';

export interface CarouselGalleryProps {
    className?: string;
    items: GalleryCardProps[];

}


export const CarouselGallery = ({ items, className }: CarouselGalleryProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h1>Heading 1</h1>
        </div>
        <div className={styles.carousel}>
            <button>Button</button>
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
        <div>
            <button>Button</button>
        </div>
    </div>;
};
