import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Card } from './card/card';
import { HeroImage } from './hero-image/hero-image';
import { ROUTES } from '../../router/config';
import { products } from '@wix/stores';
import { useContext, useEffect, useState } from 'react';
import { WixAPIContext } from '../../api/WixAPIContextProvider';
import { useNavigate } from 'react-router-dom';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Array<products.Product>>([]);

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getPromotedProducts().then((prods) => {
            setProducts(prods);
        });
    }, [wixApi]);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-banner']}>
                <HeroImage
                    title="Incredible Prices on All Your Favorite Items"
                    topLabel="Best Prices"
                    bottomLabel="Get more for less on selected brands"
                    primaryButtonLabel="Shop Now"
                    topLabelClassName={styles['top-label-highlighted']}
                    onPrimaryButtonClick={() => navigate(ROUTES.products.to())}
                    imageUrl="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                />
            </div>
            {products?.[0]?._id && products?.[1]?._id && (
                <div className={styles['two-hero-images']}>
                    <Card
                        imageUrl="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1622,h_749,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                        topLabel="Holiday Deals"
                        bottomLabel="Top Smartphone Brands"
                        secondaryButtonLabel="Shop"
                        title="Up to 30% off"
                        onSecondaryButtonClick={() => navigate(ROUTES.product.to(products[0]._id!))}
                    />
                    <Card
                        imageUrl="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1622,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
                        topLabel="Just In"
                        bottomLabel="Top Headphone Brands"
                        secondaryButtonLabel="Shop"
                        title="Take Your Sound Anywhere"
                        onSecondaryButtonClick={() => navigate(ROUTES.product.to(products[1]._id!))}
                    />
                </div>
            )}
        </div>
    );
};
