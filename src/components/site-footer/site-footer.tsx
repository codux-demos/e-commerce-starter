import classNames from 'classnames';
import styles from './site-footer.module.scss';

export interface SiteFooterProps {
    className?: string;
}

export const SiteFooter = ({ className }: SiteFooterProps) => {
    return <div className={classNames(styles.root, className)}>
        <p className={styles.footerTitle}>Store Location</p>
        <p className={styles.footerContent}>500 Terry Francine Street San Francisco, CA 94158 info@mysite.com</p>
    </div>;
};
