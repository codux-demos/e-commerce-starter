import React, { FC, useMemo } from 'react';
import { createProducts, createProduct, createCart } from './fakeData';
import { WixAPI, WixAPIContext } from '../../api/WixAPIContextProvider';

function getWixApi(): WixAPI {
    const products = createProducts(10);

    return {
        getAllProducts: async () => {
            return products;
        },
        getProduct: async (id: string | undefined) => {
            return createProduct(id);
        },
        getCart: () => {
            return Promise.resolve(createCart([products[0], products[3]]));
        },
        //@ts-expect-error - This is a fake implementation
        updateCartItemQuantity: (id: string | undefined | null, quantity: number) => {
            alert(`Update item ${id} to quantity ${quantity}`);
            return Promise.resolve();
        },
        //@ts-expect-error - This is a fake implementation
        removeItemFromCart: (id: string) => {
            alert(`Remove item ${id}`);
            return Promise.resolve();
        },
    };
}

export const FakeWixAPIContextProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
    const api = useMemo(() => {
        return getWixApi();
    }, []);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
