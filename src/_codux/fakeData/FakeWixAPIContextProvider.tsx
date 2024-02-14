import React, { FC, useMemo } from 'react';
import { createProducts, createProduct, createCart } from './fakeData';
import { WixAPI, WixAPIContext } from '../../api/WixAPIContextProvider';
import { faker } from '@faker-js/faker';

export type WixApiSettings = {
    numberOfCartItems?: number;
    numberOfProducts?: number;
};

function getWixApi(settings?: WixApiSettings): WixAPI {
    faker.seed(123);
    const products = createProducts(settings?.numberOfProducts || 10);

    return {
        getAllProducts: async () => {
            return products;
        },
        getProduct: async (id: string | undefined) => {
            faker.seed(123);
            return createProduct(id);
        },
        getPromotedProducts: async () => {
            return products.slice(0, 2);
        },
        getCart: () => {
            faker.seed(123);
            const productsInCart =
                settings?.numberOfCartItems === 0
                    ? []
                    : products.slice(0, settings?.numberOfCartItems || 2);
            return Promise.resolve(createCart(productsInCart));
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

export const FakeWixAPIContextProvider: FC<{
    children: React.ReactElement;
    settings?: WixApiSettings;
}> = ({ children, settings }) => {
    const api = useMemo(() => {
        return getWixApi(settings);
    }, [settings]);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
