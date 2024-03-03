import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../../components/product-card/product-card';
import ProductCard_board_module from './product-card.board.module.scss';

export default createBoard({
    name: 'Product Card',
    Board: () => (
        <ProductCard
            imageUrl="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"
            name='Shel 50" Class LED 4K UHD Smart TV'
            price={{ formatted: { price: '$85' } }}
            className={ProductCard_board_module.productCard}
        />
    ),
    isSnippet: true,
});
