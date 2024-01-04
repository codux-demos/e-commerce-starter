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
                <div className={styles.text}>
                    I’m a paragraph. Add your own text and edit me on properties panel on the right.
                    It’s easy. Just select me and make changes to the font on the styles panel on
                    the right. I’m a great place for you to tell a story and let your viewers know a
                    little more about you.
                </div>
                <ConnectionComponent />
            </div>
            <button className={styles.button}>Learn more</button>
            <img src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.image} />
        </div>
    );
};
