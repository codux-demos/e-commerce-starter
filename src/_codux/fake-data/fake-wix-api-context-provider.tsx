import React, { FC, useMemo } from 'react';
import {
    createProducts,
    createProduct,
    createCart,
    getCartTotals,
    FakeDataSettings as Settings,
} from './fake-data';
import { WixAPI, WixAPIContext } from '../../api/wix-api-context-provider';
import { faker } from '@faker-js/faker';

export type FakeDataSettings = Settings;

function getWixApi(settings?: Settings): WixAPI {
    faker.seed(123);
    const products = createProducts(settings);

    const api: WixAPI = {
        getAllProducts: async () => {
            return products;
        },
        getProduct: async (id: string | undefined) => {
            faker.seed(123);
            return createProduct(id, settings);
        },
        getPromotedProducts: async () => {
            return products.slice(0, 4);
        },
        getCart: () => {
            faker.seed(123);
            const productsInCart =
                settings?.numberOfCartItems === 0
                    ? []
                    : products.slice(0, settings?.numberOfCartItems || 2);
            return Promise.resolve(createCart(productsInCart));
        },
        getCartTotals: () => {
            faker.seed(123);
            return Promise.resolve(getCartTotals());
        },
        addToCart: (id: string, quantity: number) => {
            alert(`Add item ${id} to cart with quantity ${quantity}`);
            return api.getCart();
        },
        updateCartItemQuantity: (id: string | undefined | null, quantity: number) => {
            alert(`Update item ${id} to quantity ${quantity}`);
            return api.getCart();
        },
        removeItemFromCart: (id: string) => {
            alert(`Remove item ${id}`);
            return api.getCart();
        },
        checkout: () => {
            alert('Checkout');
            return Promise.resolve({ success: true, url: '' });
        },
    };

    return api;
}

export const FakeWixAPIContextProvider: FC<{
    children: React.ReactElement;
    settings?: Settings;
}> = ({ children, settings }) => {
    const api = useMemo(() => {
        return getWixApi(settings);
    }, [settings]);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
