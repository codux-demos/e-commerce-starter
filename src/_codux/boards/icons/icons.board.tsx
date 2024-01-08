import { HeartFilledIcon, HeartIcon, MagnifyingGlassIcon, AvatarIcon } from '@radix-ui/react-icons';
import { createBoard } from '@wixc3/react-board';
import styles from './icons-board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Icons',
    Board: () => (
        <div className={styles.wrapper}>
            <HeartIcon width={20} height={20} className={styles.icon} />
            <MagnifyingGlassIcon width={20} height={20} className={styles.icon} />
            <AvatarIcon width="20" height="20" className={styles.icon} />
        </div>
    ),
    isSnippet: true,
});
