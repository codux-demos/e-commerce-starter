import classNames from 'classnames';
import styles from './header.module.scss';
import { ROUTES } from '../../router/config';
import { Cart } from '../cart/cart';
import { Link } from 'react-router-dom';

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
                <Link to="/">Home</Link>
                <Link to={ROUTES.products.to()}>Products</Link>
                <Link to={ROUTES.about.to()}>About</Link>
                <Cart />
            </div>
        </div>
    );
};
