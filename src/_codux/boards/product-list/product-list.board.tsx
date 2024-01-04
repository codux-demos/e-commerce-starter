import { createBoard } from '@wixc3/react-board';
import { ProductList } from '../../../components/product-list/product-list';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'ProductList',
    Board: () => (
        <ComponentWrapper>
            <ProductList />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
