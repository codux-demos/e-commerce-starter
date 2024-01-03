import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <a href="/" className={styles.logo}>Logo</a>
        <div className={styles.menu}>
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">About</a>
        </div></div>;
};
