import { ArrowRightIcon } from '@radix-ui/react-icons';
import styles from './drawer.module.scss';
import cx from 'classnames';
import { useEffect, useState } from 'react';

export interface DrawerProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    title: string;
    children?: React.ReactNode;
}

export const Drawer = ({ className, onClose: onclose, title, children }: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    function handleClose() {
        setIsOpen(false);
        setTimeout(() => {
            onclose && onclose();
        }, 300);
    }

    return (
        <div onClick={handleClose} className={styles.background}>
            <div className={cx(styles.drawer, className, { [styles.open]: isOpen })}>
                <div className={styles.header}>
                    <ArrowRightIcon className={styles.arrowIcon} onClick={handleClose} />
                    <h3>{title}</h3>
                </div>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    );
};
