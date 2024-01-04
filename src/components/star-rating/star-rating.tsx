import classNames from 'classnames';
import styles from './star-rating.module.scss';

export interface StarRatingProps {
    className?: string;
    rating: number;
    raters: number;
    path: string;
}

export const StarRating = ({ className, rating, raters, path }: StarRatingProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['stars-container']}>
                <svg
                    viewBox="3 2 18 18"
                    width="14"
                    height="14"
                    className={classNames(styles['star-icon'], styles['star-full'])}
                >
                    <path d={path} />
                </svg>
                <svg
                    viewBox="3 2 18 18"
                    width="14"
                    height="14"
                    className={classNames(styles['star-icon'], styles['star-full'])}
                >
                    <path d={path} />
                </svg>
                <svg
                    viewBox="3 2 18 18"
                    width="14"
                    height="14"
                    className={classNames(styles['star-icon'], styles['star-full'])}
                >
                    <path d={path} />
                </svg>
                <svg
                    viewBox="3 2 18 18"
                    width="14"
                    height="14"
                    className={classNames(styles['star-icon'], styles['star-full'])}
                >
                    <path d={path} />
                </svg>
                <svg
                    viewBox="3 2 18 18"
                    width="14"
                    height="14"
                    className={classNames(styles['star-icon'], styles['star-empty'])}
                >
                    <path d={path} />{' '}
                </svg>
                <p className={styles['rating-text']}>
                    {rating} ({raters})
                </p>{' '}
            </div>
        </div>
    );
};
