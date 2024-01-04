import classNames from 'classnames';
import styles from './product-page.module.scss';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../router/config';

export interface ProductPageProps {
    className?: string;
}

export const ProductPage = ({ className }: ProductPageProps) => {
    const { id: strId } = useParams<RouteParams['/products/:id']>();
    const productId = strId ? parseInt(strId) : -1;

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is Product Details Page</div>
        </div>
    );
};
