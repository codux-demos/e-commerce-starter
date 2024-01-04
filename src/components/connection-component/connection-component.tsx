import { useEffect, useMemo, useState } from 'react';

import { OAuthStrategy, createClient } from '@wix/sdk';
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';

export const ConnectionComponent = () => {
    const wixClient = useMemo(() => {
        return createClient({
            modules: {
                products,
                currentCart,
            },
            auth: OAuthStrategy({
                clientId: '84452635-47cb-45b8-be5b-ca3938e93193',
            }),
        });
    }, []);

    const [myProducts, setMyProducts] = useState<products.Product[]>([]);

    useEffect(() => {
        wixClient.products
            .queryProducts()
            .find()
            .then((res) => {
                setMyProducts(res.items);
            });
    }, []);

    return (
        <div>
            hello, world
            <div>{myProducts.map((item) => item.name)}</div>
        </div>
    );
};
