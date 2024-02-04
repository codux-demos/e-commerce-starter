import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';

faker.seed(123);

export function createProducts(numOfItems?: number) {
    return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

export function createProduct(id?: string): products.Product {
    const numOfImages = faker.number.int({ min: 2, max: 4 });
    const images = Array.from(new Array(numOfImages)).map(createImage);
    const mainImage = images[faker.number.int({ min: 0, max: numOfImages - 1 })];

    return {
        _id: id ?? faker.string.uuid(),
        slug: faker.lorem.word(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        media: {
            items: images,
            mainMedia: mainImage,
        },
        price: {
            formatted: {
                price: faker.commerce.price({
                    symbol: '$',
                }),
            },
        },
    };
}

export function createImage(): products.MediaItem {
    return {
        _id: faker.string.uuid(),
        image: {
            url: faker.image.urlLoremFlickr({
                category: 'cats',
            }),
        },
        title: faker.lorem.word(),
    };
}
