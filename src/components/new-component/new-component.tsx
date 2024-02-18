import classNames from 'classnames';
import styles from './new-component.module.scss';
import commonStyles from '@styles/common-styles.module.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <form className={styles.form}>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label className={styles.labe}>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            NewComponent
        </div>
    );
};
