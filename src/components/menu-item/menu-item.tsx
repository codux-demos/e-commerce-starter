import classNames from 'classnames';
import styles from './menu-item.module.scss';

export interface MenuItemProps {
    className?: string;
    title: string;
    url: string;
}

export const MenuItem = ({ className, title, url }: MenuItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href={url}>{title}</a>
        </div>
    );
};
