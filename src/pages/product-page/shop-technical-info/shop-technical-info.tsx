import classNames from 'classnames';
import styles from './shop-technical-info.module.scss';

export interface ShopTechnicalInfoProps {
    className?: string;
}

export const ShopTechnicalInfo = ({ className }: ShopTechnicalInfoProps) => {
    return <div className={classNames(styles.root, className)}>ShopTechnicalInfo</div>;
};
