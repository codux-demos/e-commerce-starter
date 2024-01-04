import classNames from 'classnames';
import styles from './logo.module.scss';

export interface LogoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Logo = ({ className }: LogoProps) => {
    return <div className={classNames(styles.root, className)}><p className={styles.logo}>TechShed</p>
    </div>;
};
