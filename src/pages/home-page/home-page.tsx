import classNames from 'classnames';
import styles from './home-page.module.scss';
import { HeroImage } from './hero-image/hero-image';
import { ROUTES } from '../../router/config';
import { products } from '@wix/stores';
import { useContext, useEffect, useState } from 'react';
import { WixAPIContext } from '../../api/WixAPIContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/product-card';

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
            <div className={styles['hero-paragraph']}>
                <HeroImage
                    title="Incredible Prices on All Your Favorite Items"
                    topLabel="Best Prices"
                    bottomLabel="Get more for less on selected brands"
                    primaryButtonLabel="Shop Now"
                    topLabelClassName={styles['top-label-highlighted']}
                    onPrimaryButtonClick={() => navigate(ROUTES.products.to())}
                    imageUrl="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <h1 className={styles['hero-title']}>
                    Heading 1<p className={styles.HPprgrp}>This is a paragraph.</p>
                </h1>
            </div>
            <div className={styles.cardsLayout}>
                {products.map((product) =>
                    product._id && product.name ? (
                        <Link to={ROUTES.product.to(product._id)} key={product._id}>
                            <ProductCard
                                imageUrl={product.media?.items?.at(0)?.image?.url}
                                name={product.name}
                                price={product.price ?? undefined}
                                    className={styles.productCard}

                            />
                        </Link>
                    ) : null,
                )}
            </div>
        </div>
    );
};
