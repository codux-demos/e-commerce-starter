import { createBoard } from '@wixc3/react-board';
import { ShopTechnicalInfo } from '../../../../../pages/product-page/shop-technical-info/shop-technical-info';

export default createBoard({
    name: 'ShopTechnicalInfo',
    Board: () => <ShopTechnicalInfo />,
    isSnippet: true,
});
