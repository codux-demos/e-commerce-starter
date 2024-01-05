import classNames from 'classnames';
import styles from './button-primary.module.scss';

export interface ButtonPrimaryProps {
    className?: string;
    title: string;
    onClick?: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ButtonPrimary = ({ className, title }: ButtonPrimaryProps) => {
    return <div className={classNames(styles.root, className)}>{title}</div>;
};
