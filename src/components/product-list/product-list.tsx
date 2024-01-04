import { useContext, useEffect, useState } from 'react';
import { GalleryCard } from '../gallery-card/gallery-card';
import { ROUTES } from '../../router/config';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { products } from '@wix/stores';
import { WixAPIContext } from '../contexts/WixAPIContextProvider';
import CardImage_module from '../card-image/card-image.module.scss';

export interface ProductListProps {
    className?: string;
}

export const ProductList = ({ className }: ProductListProps) => {
    const [myProducts, setMyProducts] = useState<products.Product[]>([]);

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getAllProducts().then((products) => {
            setMyProducts(products);
        });
    }, [wixApi]);

    return (
        <div className={classNames(className, CardImage_module.root)}>
            {myProducts.map(
                (item) =>
                    item._id &&
                    item.name && (
                        <Link to={ROUTES.product.to(item._id)} key={`link_${item._id}`}>
                            <GalleryCard
                                src={item.media?.mainMedia?.image?.url}
                                key={item._id}
                                name={item.name}
                                price={item.price ?? undefined}
                                rating={undefined}
                                raters={undefined}
                            />
                        </Link>
                    )
            )}
        </div>
    );
};
