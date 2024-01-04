import classNames from 'classnames';
import styles from './about-page.module.scss';

export interface AboutPageProps {
    className?: string;
}

export const AboutPage = ({ className }: AboutPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is About Page</div>
        </div>
    );
};
