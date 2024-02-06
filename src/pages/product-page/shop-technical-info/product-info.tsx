import classNames from 'classnames';
import styles from './product-info.module.scss';

export interface ProductInfoProps {
    className?: string;
}

export const ProductInfo = ({ className }: ProductInfoProps) => {
    return <div className={classNames(styles.root, className)}>ShopTechnicalInfo</div>;
};
