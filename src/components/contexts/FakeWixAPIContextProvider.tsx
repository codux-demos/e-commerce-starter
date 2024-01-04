import React, { FC, useMemo } from 'react';
import { createProducts } from '../../_codux/fakeData/fakeData';
import { WixAPIContext } from './WixAPIContextProvider';

function getWixApi() {
    return {
        getAllProducts: async () => {
            return createProducts(10);
        },
    };
}

export const FakeWixAPIContextProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
    const api = useMemo(() => {
        return getWixApi();
    }, []);

    return <WixAPIContext.Provider value={api}>{children}</WixAPIContext.Provider>;
};
