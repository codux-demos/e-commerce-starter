import React, { FC, useMemo } from 'react';
import { createProducts, createProduct } from '../../_codux/fakeData/fakeData';
import { WixAPIContext } from './WixAPIContextProvider';

function getWixApi() {
    return {
        getAllProducts: async () => {
            return createProducts(10);
        },
        getProduct: async (id: string) => {
            return createProduct(id);
        }
    };
}

export const FakeWixAPIContextProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
    const api = useMemo(() => {
        return getWixApi();
    }, []);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
