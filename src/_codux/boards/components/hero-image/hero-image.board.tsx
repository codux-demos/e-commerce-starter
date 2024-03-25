import { createBoard } from '@wixc3/react-board';
import { HeroImage } from '../../../../pages/home-page/hero-image/hero-image';
import imgSrc from '../../../../assets/img/[420_340]_heroImage04.jpg';

export default createBoard({
    name: 'HeroImage',
    Board: () => (
        <HeroImage
            bottomLabel="Selected Smartphone Brands"
            secondaryButtonLabel="Shop"
            title="Up to 30% off"
            topLabel="Holiday Deals"
            imageSrc={imgSrc}
        />
    ),
    isSnippet: true,
    environmentProps: {
    },
});
