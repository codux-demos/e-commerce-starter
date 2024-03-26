import classNames from 'classnames';
import styles from './header.module.scss';
import { ROUTES } from '../../router/config';
import { Cart } from '../cart/cart';
import { Link } from 'react-router-dom';
import CommonStyles_module from '../../styles/common-styles.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                LOGO
            </Link>
            <div className={styles.menu}>
                <Link to="/" className={CommonStyles_module.secondaryButton}>
                    Home
                </Link>
                <Link to={ROUTES.products.to()} className={CommonStyles_module.secondaryButton}>
                    Products
                </Link>
                <Link to={ROUTES.about.to()} className={CommonStyles_module.secondaryButton}>
                    About
                </Link>
                <Cart className={CommonStyles_module.secondaryButton} buttonText="Cart" />
            </div>
        </div>
    );
};
