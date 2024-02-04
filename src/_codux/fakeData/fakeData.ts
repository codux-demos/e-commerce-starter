import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';
import { PaymentOptionType } from '@wix/ecom/build/cjs/src/ecom-v1-cart-cart.public';
import { WixAPI } from '../../components/contexts/WixAPIContextProvider';
import { WeightUnit } from '@wix/ecom/build/cjs/src/ecom-v1-cart-current-cart.universal';

faker.seed(123);

type Product = Exclude<Awaited<ReturnType<WixAPI['getProduct']>>, undefined>;
type Media = Exclude<Exclude<Product['media'], undefined>['mainMedia'], undefined>;
type Cart = Awaited<ReturnType<WixAPI['getCart']>>;

export function createProducts(numOfItems?: number): Awaited<ReturnType<WixAPI['getAllProducts']>> {
    return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

export function createProduct(id?: string): Product {
    const numOfImages = faker.number.int({ min: 2, max: 4 });
    const images = Array.from(new Array(numOfImages)).map(createImage);
    const mainImage = images[faker.number.int({ min: 0, max: numOfImages - 1 })];

    const price = faker.commerce.price({ symbol: '$' });
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
                price: price,
                discountedPrice: price,
            },
            currency: 'USD',
            discountedPrice: parseFloat(price),
        },
        productType: products.ProductType.digital,
        additionalInfoSections: [],
        collectionIds: [],
        customTextFields: [],
        inventoryItemId: '',
        numericId: '',
        productOptions: [],
        ribbons: [],
        variants: [],
    };
}

export function createImage(): Media {
    return {
        _id: faker.string.uuid(),
        image: {
            url: faker.image.urlLoremFlickr({
                category: 'cats',
                width: 640,
                height: 480,
            }),
            width: 640,
            height: 480,
        },
        title: faker.lorem.word(),
        mediaType: products.MediaItemType.image,
    };
}

export function createCart(products: products.Product[]): Cart {
    return {
        _id: faker.string.uuid(),
        currency: 'USD',
        lineItems: products.map(createCartItem),
        appliedDiscounts: [],
        conversionCurrency: 'USD',
        weightUnit: WeightUnit.KG,
    };
}

export function createCartItem(product: products.Product): Cart['lineItems'][0] {
    const priceStr = faker.commerce.price({ symbol: '$' });
    const price = parseFloat(priceStr);

    return {
        _id: faker.string.uuid(),
        productName: {
            original: product.name!,
            translated: product.name,
        },
        quantity: faker.number.int({ min: 1, max: 10 }),
        image: product.media!.mainMedia!.image!.url!,
        paymentOption: PaymentOptionType.FULL_PAYMENT_ONLINE,
        price: {
            amount: price.toString(),
            convertedAmount: price.toString(),
            formattedConvertedAmount: priceStr,
            formattedAmount: priceStr,
        },
        descriptionLines: [],
        url: '',
    };
}
