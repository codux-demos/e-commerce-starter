import { createBoard } from '@wixc3/react-board';
import { CarouselGallery } from '../../../components/carousel-gallery/carousel-gallery';

export default createBoard({
    name: 'CarouselGallery',
    Board: () => (
        <CarouselGallery
            items={[
                {
                    currency: '$',
                    description: 'Samsung 24" OLED IPS Monitor',
                    price: 850,
                    raters: 2,
                    rating: 4,
                },
                {
                    currency: '$',
                    description: 'Samsung 24" OLED IPS Monitor',
                    price: 850,
                    raters: 2,
                    rating: 4,
                },
                {
                    currency: '$',
                    description: 'Samsung 24" OLED IPS Monitor',
                    price: 850,
                    raters: 2,
                    rating: 4,
                },
                {
                    currency: '$',
                    description: 'Samsung 24" OLED IPS Monitor',
                    price: 850,
                    raters: 2,
                    rating: 4,
                },
                {
                    currency: '$',
                    description: 'Samsung 24" OLED IPS Monitor',
                    price: 850,
                    raters: 2,
                    rating: 4,
                },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1662
    }
});
