import classNames from 'classnames';
import styles from './left-arrow.module.scss';

export interface LeftArrowProps {
    className?: string;
}

export const LeftArrow = ({ className }: LeftArrowProps) => {
    return (
        <svg width="24px" height="24px">
            <polygon 
                transform="translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000) " 
                points="11.9989984 6 0 16.4818792 1.31408063 18 11.9989984 8.66778523 22.6859194 18 24 16.4818792"
            >
            </polygon>
        </svg>
    );
};
