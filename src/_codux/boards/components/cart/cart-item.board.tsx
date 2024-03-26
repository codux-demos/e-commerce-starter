import { createBoard } from '@wixc3/react-board';
import { CartItem } from '../../../../components/cart/cart-item/cart-item';
import { ReactNode, useEffect, useState } from 'react';
import { FakeDataSettings, createCartItem, createProduct } from '../../../fake-data/fake-data';

function ImageSetting({
    children,
    imageToUse,
    onImageChange,
}: {
    children: ReactNode;
    /** @important */
    imageToUse?: FakeDataSettings['imageToUse'];
    onImageChange: (image: FakeDataSettings['imageToUse']) => void;
}) {
    useEffect(() => {
        onImageChange(imageToUse);
    }, [imageToUse]);
    return children;
}

export default createBoard({
    name: 'Cart Item',
    Board: () => {
        const [image, setImage] = useState<FakeDataSettings['imageToUse']>();

        const product = createProduct('1', { imageToUse: image });
        const cartItem = createCartItem(product);

        return (
            <ImageSetting onImageChange={setImage} imageToUse="[100_100]_grey.jpg">
                <CartItem cartItem={cartItem} />
            </ImageSetting>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
