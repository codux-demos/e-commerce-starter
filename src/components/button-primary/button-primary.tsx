import classNames from 'classnames';
import styles from './button-primary.module.scss';

export interface ButtonPrimaryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ButtonPrimary = ({ className }: ButtonPrimaryProps) => {
    return <div className={classNames(styles.root, className)}>Button Primary</div>;
};
