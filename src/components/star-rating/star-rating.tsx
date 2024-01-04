import classNames from 'classnames';
import styles from './star-rating.module.scss';

export interface StarRatingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StarRating = ({ className }: StarRatingProps) => {
    return <div className={classNames(styles.root, className)}>
        <div />StarRating</div>;
};
