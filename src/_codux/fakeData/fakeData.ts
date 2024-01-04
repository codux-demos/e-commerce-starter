import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';

export function createProducts(numOfItems?: number) {
    return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

function createProduct(): products.Product {
    return {
        _id: faker.string.uuid(),
        slug: faker.lorem.word(),
        name: faker.commerce.productName(),
        media: {
            mainMedia: {
                image: {
                    url: faker.image.urlLoremFlickr({ category: 'product' }),
                },
            },
        },
        price: {
            formatted: {
                price: faker.commerce.price({
                    symbol: 'USD',
                }),
            },
        },
    };
}
