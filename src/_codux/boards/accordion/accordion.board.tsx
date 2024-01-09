import { createBoard } from '@wixc3/react-board';
import { Accordion } from '../../../components/accordion/accordion';

export default createBoard({
    name: 'Accordion',
    Board: () => (
        <Accordion
            items={[
                {
                    title: 'Product Info',
                    description:
                        "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
                },
                {
                    title: 'Return & Refund Policy',
                    description:
                        'I`m a Return and Refund policy. I`m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
                },
                {
                    title: 'Shipping Info',
                    description:
                        'I`m a shipping policy. I`m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.',
                },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 300,
        canvasHeight: 500,
        canvasPadding: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        }
    }
});
