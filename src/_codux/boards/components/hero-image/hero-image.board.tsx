import { HeroImage } from '../../../../pages/home-page/hero-image/hero-image';
import { ContentSlot, createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'HeroImage',
    Board: () => (
        <ContentSlot>
            <HeroImage
                bottomLabel="Selected Smartphone Brands"
                primaryButtonLabel="Shop"
                title="Up to 30% off"
                topLabel="Holiday Deals"
            />
        </ContentSlot>
    ),
    isSnippet: true,
});
