import React, { FC, useMemo } from 'react';
import { createProducts, createProduct, createCart, getCartTotals } from './fakeData';
import { WixAPI, WixAPIContext } from '../../api/WixAPIContextProvider';
import { faker } from '@faker-js/faker';

export type WixApiSettings = {
    numberOfCartItems?: number;
    numberOfProducts?: number;
    differentRatioImages?: boolean;
};

function getWixApi(settings?: WixApiSettings): WixAPI {
    faker.seed(123);
    const products = createProducts(
        settings?.numberOfProducts || 10,
        settings?.differentRatioImages
    );

    const api: WixAPI = {
        getAllProducts: async () => {
            return products;
        },
        getProduct: async (id: string | undefined) => {
            faker.seed(123);
            return createProduct(id, settings?.differentRatioImages);
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
            return Promise.resolve(getCartTotals(settings?.numberOfCartItems || 2));
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
    settings?: WixApiSettings;
}> = ({ children, settings }) => {
    const api = useMemo(() => {
        return getWixApi(settings);
    }, [settings]);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
