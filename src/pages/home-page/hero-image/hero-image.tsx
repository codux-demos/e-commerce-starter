import CommonStyles_module from '../../../styles/common-styles.module.scss';
import smallHeroImage from '../../../assets/img/[430_340]_heroImage04.jpg';
import mediumHeroImage from '../../../assets/img/[760_460]_heroImage04.jpg';
import largeHeroImage from '../../../assets/img/[1024_640]_heroImage04.jpg';
import xLargeHeroImage from '../../../assets/img/[1400_640]_heroImage04.jpg';
import classNames from 'classnames';
import styles from './hero-image.module.scss';

export interface HeroImageProps {
    className?: string;
    topLabel: string;
    topLabelClassName?: string;
    title: string;
    bottomLabel: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
}

export const HeroImage = ({
    title,
    bottomLabel,
    buttonLabel,
    onButtonClick,
    className,
}: HeroImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <picture>
                <source media="(1400px <= width)" srcSet={xLargeHeroImage} />
                <source media="(1024px <= width)" srcSet={largeHeroImage} />
                <source media="(760px <= width)" srcSet={mediumHeroImage} />
                <img src={smallHeroImage} className={styles.image} alt="Hero background" />
            </picture>
            <div className={styles.overlay}>
                <p className={styles['small-title']}>{title}</p>
                <h1 className={styles['big-title']}>{bottomLabel} </h1>
                {buttonLabel && (
                    <button
                        onClick={onButtonClick}
                        className={classNames(
                            CommonStyles_module.primaryButton,
                            styles['overlay-button']
                        )}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
        </div>
    );
};
