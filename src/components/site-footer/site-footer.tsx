import classNames from 'classnames';
import styles from './site-footer.module.scss';

export interface SiteFooterProps {
    className?: string;
}

export const SiteFooter = ({ className }: SiteFooterProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <div>
                <p className={styles.footerTitle}>Store Location</p>
                <p className={styles.footerContent}>500 Terry Francine Street San Francisco, CA 94158 info@mysite.com</p></div>
            <div>
                <p className={styles.footerContent}>123-456-7890</p>
            </div></div>
        <div>
            <p className={styles.footerTitle}>Shop</p>
            <a href="/https://www.wix.com/website-template/view/html/2860?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Felectronics&amp;tpClick=view_button&amp;esi=3f77d9ac-c430-4c6f-b713-1218dfcd14a8" className={styles.footerContent}>Shop All</a></div>
        <div>
            <p className={styles.footerTitle}>Store Location</p>
            <p className={styles.footerContent}>500 Terry Francine Street San Francisco, CA 94158 info@mysite.com</p></div>
        <div>
            <p className={styles.footerTitle}>Store Location</p>
            <p className={styles.footerContent}>500 Terry Francine Street San Francisco, CA 94158 info@mysite.com</p></div></div>;
};
