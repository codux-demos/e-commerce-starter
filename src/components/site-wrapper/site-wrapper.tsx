import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { Header } from '../header/header';
import { Outlet } from 'react-router-dom';
import { TopMenu } from '../top-menu/top-menu';
import { SiteFooter } from '../site-footer/site-footer';
import { Cart } from '../cart/cart';

export interface SiteWrapperProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const SiteWrapper = ({ className }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <TopMenu className={styles.topMenu} />
            <Cart />
            <div className={styles.content}>
                <Outlet />
            </div>
            <SiteFooter />
        </div>
    );
};
