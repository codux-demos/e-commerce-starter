import { currentCart } from '@wix/ecom';
import { OAuthStrategy, createClient } from '@wix/sdk';
import { products } from '@wix/stores';
import React, { FC, useMemo } from 'react';

function getWixClient() {
    return createClient({
        modules: {
            products,
            currentCart,
        },
        auth: OAuthStrategy({
            clientId: 'c2a3a73f-2a08-4355-93af-555a9740ea0c',
        }),
    });
}

function getWixApi(wixClient: ReturnType<typeof getWixClient>) {
    return {
        getAllProducts: async () => {
            return (await wixClient.products.queryProducts().find()).items;
        },
    };
}

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
