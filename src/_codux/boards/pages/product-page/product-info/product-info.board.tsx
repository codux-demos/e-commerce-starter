import { createBoard } from '@wixc3/react-board';
import { ProductInfo } from '../../../../../pages/product-page/product-info/product-info';

export default createBoard({
    name: 'Product Info',
    Board: () => (
        <ProductInfo
            productInfo={[
                {
                    title: 'PRODUCT INFO',
                    description:
                        'I’m a product detail. I’m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.',
                },
                {
                    title: 'RETURN & REFUND POLICY',
                    description:
                        'I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
                },
                {
                    title: 'SHIPPING INFO',
                    description:
                        'I’m a shipping policy. I’m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.',
                },
            ]}
        />
    ),
    isSnippet: true,
});
