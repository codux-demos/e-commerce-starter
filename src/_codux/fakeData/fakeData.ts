import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';

export function createProducts(numOfItems?: number) {
    return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

export function createProduct(
    id?: string
): products.Product & { rating?: number; ratingCount?: number } {
    return {
        _id: id ?? faker.string.uuid(),
        slug: faker.lorem.word(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        media: {
            mainMedia: {
                image: {
                    url: faker.image.urlLoremFlickr({
                        category: 'product',
                        height: 241,
                        width: 241,
                    }),
                },
            },
        },
        price: {
            formatted: {
                price: faker.commerce.price({
                    symbol: '$',
                }),
            },
        },
        rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
        ratingCount: faker.number.int({ min: 0, max: 1000 }),
    };
}
