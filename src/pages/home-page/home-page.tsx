import classNames from 'classnames';
import styles from './home-page.module.scss';
import { ConnectionComponent } from '../../components/connection-component/connection-component';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>This Is Home Page</div>
            <div className={styles.paragraph}>
                <ConnectionComponent />
            </div>
            <button className={styles.button}>Learn more</button>
            <img
                src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.image}
            />
        </div>
    );
};
