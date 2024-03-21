import { createBoard } from '@wixc3/react-board';
import { HeroImage } from '../../../../pages/home-page/hero-image/hero-image';

export default createBoard({
    name: 'HeroImage',
    Board: () => (
        <HeroImage
            bottomLabel="Selected Smartphone Brands"
            secondaryButtonLabel="Shop"
            title="Up to 30% off"
            topLabel="Holiday Deals"
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
