import classNames from 'classnames';
import styles from './home-page.module.scss';
import { HeroImage } from '../../components/hero-image/hero-image';
import { ROUTES } from '../../router/config';
import { products } from '@wix/stores';
import { useContext, useEffect, useMemo, useState } from 'react';
import { WixAPIContext } from '../../components/contexts/WixAPIContextProvider';
import { useNavigate } from 'react-router-dom';
import { CarouselGallery } from '../../components/carousel-gallery/carousel-gallery';
import { GalleryCardProps } from '../../components/product-card/product-card';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<
        Array<products.Product & { rating?: number; ratingCount?: number }>
    >([]);

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getAllProducts().then((prods) => {
            setProducts(prods);
        });
    }, [wixApi]);

    const carouselItems: GalleryCardProps[] = useMemo(
        () =>
            products
                .map((product) => ({
                    name: product.name,
                    imageUrl: product.media?.items?.[0]?.image?.url,
                    price: product.price,
                    rating: product.rating,
                    ratingCount: product.ratingCount,
                }))
                .filter((item) => !!item.name) as GalleryCardProps[],
        [products]
    );

    return (
        <div className={classNames(styles.root, className)}>
            {products?.[0]?._id && (
                <div className={styles['top-banner']}>
                    <HeroImage
                        title="Incredible Prices on All Your Favorite Items"
                        topLabel="Best Prices"
                        bottomLabel="Get more for less on selected brands"
                        primaryButtonLabel="Shop Now"
                        className={styles['top-banner-hero-image']}
                        topLabelClassName={styles['top-label-highlighted']}
                        onPrimaryButtonClick={() => navigate(ROUTES.product.to(products[0]._id!))}
                    />
                </div>
            )}
            {products?.[1]?._id && products?.[2]?._id && (
                <div className={styles['two-hero-images']}>
                    <HeroImage
                        imageUrl="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1622,h_749,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                        topLabel="Holiday Deals"
                        bottomLabel="Selected Smartphone Brands"
                        secondaryButtonLabel="Shop"
                        title="Up to 30% off"
                        onSecondaryButtonClick={() => navigate(ROUTES.product.to(products[1]._id!))}
                    />
                    <HeroImage
                        imageUrl="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1622,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
                        topLabel="Just In"
                        bottomLabel="Top Headphone Brands"
                        secondaryButtonLabel="Shop"
                        title="Take Your Sound Anywhere"
                        onSecondaryButtonClick={() => navigate(ROUTES.product.to(products[2]._id!))}
                    />
                </div>
            )}
            <CarouselGallery
                items={carouselItems}
                buttonLabel="View All"
                title="Best Sellers"
                className={styles['home-page-carousel']}
            />
        </div>
    );
};
