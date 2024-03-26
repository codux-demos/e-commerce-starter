import classNames from 'classnames';
import styles from './thank-you-page.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import CommonStyles_module from '../../styles/common-styles.module.scss';

export interface ThankYouPageProps {
    className?: string;
}

export const ThankYouPage = ({ className }: ThankYouPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.paragraph}>
                    You will recieve a confirmation email soon. Your order number:{' '}
                </p>
            </div>
            <button className={CommonStyles_module.primaryButton} type="button">
                Continue Shopping
            </button>
        </div>
    );
};
