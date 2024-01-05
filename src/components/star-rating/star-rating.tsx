import classNames from 'classnames';
import styles from './star-rating.module.scss';
import { StarIcon } from '../star-icon/star-icon';

export interface StarRatingProps {
    className?: string;
    rating: number;
    ratingCount: number;
}

export const StarRating = ({ className, rating, ratingCount }: StarRatingProps) => {
    const fullStarsCount = Math.floor(rating);
    const fullStars: JSX.Element[] = [];
    const emptyStars: JSX.Element[] = [];
    for (let i = 0; i < fullStarsCount; i++) {
        fullStars.push(<StarIcon key={`full-icon-${i}`} className={styles['star-full']} />);
    }
    for (let i = 0; i < 5 - fullStarsCount; i++) {
        emptyStars.push(<StarIcon key={`empty-icon-${i}`} className={styles['star-empty']} />);
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['stars-container']}>
                {fullStars}
                {emptyStars}
                <p className={styles['rating-text']}>
                    {rating}{' '}({ratingCount})
                </p>
            </div>
        </div>
    );
};
