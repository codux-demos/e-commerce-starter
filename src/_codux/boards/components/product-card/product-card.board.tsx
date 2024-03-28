import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../../components/product-card/product-card';
import ProductCard_board_module from './product-card.board.module.scss';

export default createBoard({
    name: 'Product Card',
    Board: () => (
        <ProductCard
            name='Shel 50" Class LED 4K UHD Smart TV'
            price={{ formatted: { price: '$85' } }}
            className={ProductCard_board_module.productCard}
            imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters-starters/img_01.jpg"
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
