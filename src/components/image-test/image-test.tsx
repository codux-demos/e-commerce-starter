import classNames from 'classnames';
import styles from './image-test.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import heroImage from '../../../assets/img/[1024_640]_heroImage04.jpg';

export interface ImageTestProps {
    className?: string;
}

export const ImageTest = ({ className }: ImageTestProps) => {
    return (
        <img className={styles.image}
            src={heroImage}
            alt=""
        />
    );
};
