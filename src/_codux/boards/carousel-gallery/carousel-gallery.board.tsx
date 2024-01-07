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
            buttonLabel="View All"
            title="Best Sellers"
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0, right: 0, bottom: 0, left: 0
        },
        windowWidth: 806
    }
});
