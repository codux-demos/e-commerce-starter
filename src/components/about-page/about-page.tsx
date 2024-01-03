import classNames from 'classnames';
import styles from './about-page.module.scss';

export interface AboutPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutPage = ({ className }: AboutPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is About Page</div>
        </div>
    );
};
