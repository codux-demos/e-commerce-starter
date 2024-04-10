import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../../components/product-card/product-card';
import CommonStyles_module from '../../../../styles/common-styles.module.scss';

export default createBoard({
    name: 'Product Card',
    Board: () => (
        <ContentSlot>
            <ProductCard
                name="PUFFY STITCH TOTE BAG"
                price={{ formatted: { price: '$22' } }}
                imageUrl="https://static.wixstatic.com/media/84770f_d93e49e79e1a4b33bf399637370734f7~mv2.jpg/v1/fill/w_860,h_1288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_d93e49e79e1a4b33bf399637370734f7~mv2.jpg"
            />
        </ContentSlot>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 381,
        canvasWidth: 454,
        windowHeight: 1266,
    },
});
