import classNames from 'classnames';
import styles from './products-page.module.scss';

export interface ProductsPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProductsPage = ({ className }: ProductsPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is Product Page</div>
        </div>
    );
};
