import classNames from 'classnames';
import styles from './products-page.module.scss';

export interface ProductsPageProps {
    className?: string;
}

export const ProductsPage = ({ className }: ProductsPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is Products Page</div>
        </div>
    );
};
