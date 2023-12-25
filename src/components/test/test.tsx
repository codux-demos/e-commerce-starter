import classNames from 'classnames';
import styles from './test.module.scss';

export interface TestProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test = ({ className }: TestProps) => {
    return <div className={classNames(styles.root, className)}>Test</div>;
};
