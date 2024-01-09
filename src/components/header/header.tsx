import classNames from 'classnames';
import styles from './header.module.scss';
import { ROUTES } from '../../router/config';
import { Logo } from '../logo/logo';

export interface HeaderProps {
    className?: string;
    toggleDrawer: () => void;
}

export const Header = ({ className, toggleDrawer }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/" className={styles.logo}>
                <Logo />
            </a>
            <div className={styles.menu}>
                <a href="/">Home</a>
                <a href={ROUTES.about.to()}>About</a>
                <button onClick={toggleDrawer}>Cart</button>
            </div>
        </div>
    );
};
