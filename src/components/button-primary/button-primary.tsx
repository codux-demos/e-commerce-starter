import classNames from 'classnames';
import styles from './button-primary.module.scss';

export interface ButtonPrimaryProps {
    className?: string;
    label?: string;
}


export const ButtonPrimary = ({ label, className }: ButtonPrimaryProps) => {
    return <div className={classNames(styles.root, className)}>{label}</div>;
};
