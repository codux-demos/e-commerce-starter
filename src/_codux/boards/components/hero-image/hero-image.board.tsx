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
            imageUrl="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_571,h_468,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
