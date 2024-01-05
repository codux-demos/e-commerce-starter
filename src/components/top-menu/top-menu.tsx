import classNames from 'classnames';
import styles from './top-menu.module.scss';
import { ROUTES } from '../../router/config';
import { MenuItem } from '../menu-item/menu-item';

export interface TopMenuProps {
    className?: string;
}

type MenuItem = {
    title: string;
    route: string;
};

const menuItems: MenuItem[] = [
    {
        title: 'Shop All',
        route: ROUTES.products.to('all'),
    },
    {
        title: 'Computers',
        route: ROUTES.products.to('computers'),
    },
    {
        title: 'Tablets',
        route: ROUTES.products.to('tablets'),
    },
    {
        title: 'Drones & Cameras',
        route: ROUTES.products.to('dronesAndCameras'),
    },
    {
        title: 'Audio',
        route: ROUTES.products.to('audio'),
    },
    {
        title: 'Mobile',
        route: ROUTES.products.to('mobile'),
    },
    {
        title: 'TV & Home Cinema',
        route: ROUTES.products.to('tv'),
    },
    {
        title: 'Wearable Tech',
        route: ROUTES.products.to('wearable'),
    },
    {
        title: 'Sale',
        route: ROUTES.products.to('sale'),
    },
];

export const TopMenu = ({ className }: TopMenuProps) => {
    return (
        <nav className={classNames(styles.root, className)}>
            {menuItems.map((m) => (
                <MenuItem key={m.route} title={m.title} url={m.route} />
            ))}
        </nav>
    );
};
