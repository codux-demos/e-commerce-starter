import { useContext, useEffect, useState } from 'react';

import { products } from '@wix/stores';
import { WixAPIContext } from '../contexts/WixAPIContextProvider';

export const ConnectionComponent = () => {
    const [myProducts, setMyProducts] = useState<products.Product[]>([]);

    const wixApi = useContext(WixAPIContext);

    useEffect(() => {
        wixApi.getAllProducts().then((products) => {
            setMyProducts(products);
        });
    }, [wixApi]);

    return (
        <div>
            hello, world
            <div>
                {myProducts.map((item) => (
                    <div
                        key={item._id}
                        style={{
                            display: 'block',
                            border: '1px solid blue',
                            padding: '10px',
                            margin: '10px',
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
