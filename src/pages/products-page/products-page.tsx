import classNames from 'classnames';
import styles from './products-page.module.scss';
import { ProductList } from '../../components/product-list/product-list';

export interface ProductsPageProps {
    className?: string;
}

export const ProductsPage = ({ className }: ProductsPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>All Products</div>
            <ProductList />
        </div>
    );
};
