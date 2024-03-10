import { currentCart } from '@wix/ecom';
import { OAuthStrategy, createClient } from '@wix/sdk';
import { products } from '@wix/stores';
import React, { FC, useMemo } from 'react';
import Cookies from 'js-cookie';

export const WIX_SESSION_TOKEN = 'wix_refreshToken';

function getTokens() {
    const tokens = Cookies.get(WIX_SESSION_TOKEN);
    return tokens ? JSON.parse(tokens) : undefined;
}

function getWixClient() {
    return createClient({
        modules: {
            products,
            currentCart,
        },
        auth: OAuthStrategy({
            clientId: '84452635-47cb-45b8-be5b-ca3938e93193',
            tokens: getTokens(),
        }),
    });
}

function getWixApi(wixClient: ReturnType<typeof getWixClient>) {
    return {
        getAllProducts: async () => {
            return (await wixClient.products.queryProducts().find()).items;
        },
        getPromotedProducts: async () => {
            return (await wixClient.products.queryProducts().limit(4).find()).items;
        },
        getProduct: async (id: string | undefined) => {
            return id
                ? (await wixClient.products.queryProducts().eq('_id', id).limit(1).find()).items[0]
                : undefined;
        },
        getCart: async () => {
            return wixClient.currentCart.getCurrentCart();
        },
        updateCartItemQuantity: (id: string | undefined | null, quantity: number) => {
            return wixClient.currentCart.updateCurrentCartLineItemQuantity([
                {
                    _id: id || undefined,
                    quantity,
                },
            ]);
        },
        removeItemFromCart: (id: string) => {
            return wixClient.currentCart.removeLineItemsFromCurrentCart([id]);
        },
        addToCart: async (id: string) => {
            await wixClient.currentCart.addToCurrentCart({
                lineItems: [
                    {
                        catalogReference: {
                            catalogItemId: id,
                            appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
                        },
                        quantity: 1,
                    },
                ],
            });
            const tokens = wixClient.auth.getTokens();
            Cookies.set(WIX_SESSION_TOKEN, JSON.stringify(tokens));
        },
    };
}

export type WixAPI = ReturnType<typeof getWixApi>;

export const WixAPIContext = React.createContext<ReturnType<typeof getWixApi>>(
    {} as ReturnType<typeof getWixApi>
);

export const WixAPIContextProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
    const wixClient = useMemo(() => {
        return getWixClient();
    }, []);

    const api = useMemo(() => {
        return getWixApi(wixClient);
    }, [wixClient]);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
