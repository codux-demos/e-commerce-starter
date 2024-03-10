import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../../components/product-card/product-card';

export default createBoard({
    name: 'GalleryCard without image',
    Board: () => (
        <ProductCard
            name='Shel 50" Class LED 4K UHD Smart TV'
            price={{ formatted: { price: '$85' } }}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
