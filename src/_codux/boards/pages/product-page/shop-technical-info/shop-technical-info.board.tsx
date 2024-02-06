import { createBoard } from '@wixc3/react-board';
import { ProductInfo } from '../../../../../pages/product-page/shop-technical-info/product-info';

export default createBoard({
    name: 'Product Info',
    Board: () => <ProductInfo />,
    isSnippet: true,
});
