import classNames from 'classnames';
import styles from './counter.module.scss';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

export interface CounterProps {
    className?: string;
    count?: number;
    onChange: (newCount: number) => void;
}

export const Counter = ({ className, count = 0, onChange }: CounterProps) => {
    const onMinus = () => onChange(Math.max(count - 1, 0));
    const onPlus = () => onChange(count + 1);

    return (
        <div className={classNames(styles.root, className)}>
            <MinusIcon onClick={onMinus} className={styles.minus} />
            <span className={styles.counterValue}>{count}</span>
            <PlusIcon onClick={onPlus} className={styles.plus} />
        </div>
    );
};
