import { createBoard } from '@wixc3/react-board';
import { CarouselGallery } from '../../../components/carousel-gallery/carousel-gallery';

export default createBoard({
    name: 'CarouselGallery',
    Board: () => (
        <CarouselGallery
            items={[
                {
                    name: 'Samsung 24" OLED IPS Monitor',
                    ratingCount: 2,
                    price: {
                        formatted: {
                            price: '$850',
                            discountedPrice: '$850',
                            },
                        currency: '$',
                        price: 850,
                        discountedPrice: 850,
                        pricePerUnit: 850
                    },
                    rating: 4,
                },
                                {
                    name: 'Samsung 24" OLED IPS Monitor',
                    ratingCount: 2,
                    price: {
                        formatted: {
                            price: '$850',
                            discountedPrice: '$850',
                            },
                        currency: '$',
                        price: 850,
                        discountedPrice: 850,
                        pricePerUnit: 850
                    },
                    rating: 4,
                },
                                {
                    name: 'Samsung 24" OLED IPS Monitor',
                    ratingCount: 2,
                    price: {
                        formatted: {
                            price: '$850',
                            discountedPrice: '$850',
                            },
                        currency: '$',
                        price: 850,
                        discountedPrice: 850,
                        pricePerUnit: 850
                    },
                    rating: 4,
                },
                                {
                    name: 'Samsung 24" OLED IPS Monitor',
                    ratingCount: 2,
                    price: {
                        formatted: {
                            price: '$850',
                            discountedPrice: '$850',
                            },
                        currency: '$',
                        price: 850,
                        discountedPrice: 850,
                        pricePerUnit: 850
                    },
                    rating: 4,
                },
                                {
                    name: 'Samsung 24" OLED IPS Monitor',
                    ratingCount: 2,
                    price: {
                        formatted: {
                            price: '$850',
                            discountedPrice: '$850',
                            },
                        currency: '$',
                        price: 850,
                        discountedPrice: 850,
                        pricePerUnit: 850
                    },
                    rating: 4,
                }
            ]}
            buttonLabel="View All"
            title="Best Sellers"
        />
    ),
    isSnippet: true,
    environmentProps: {},
});
