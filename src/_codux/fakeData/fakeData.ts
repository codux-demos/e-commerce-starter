import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';
import { PaymentOptionType } from '@wix/ecom/build/cjs/src/ecom-v1-cart-cart.public';
import { Cart, WixAPI } from '../../api/WixAPIContextProvider';
import { WeightUnit } from '@wix/ecom/build/cjs/src/ecom-v1-cart-current-cart.universal';

type Product = Exclude<Awaited<ReturnType<WixAPI['getProduct']>>, undefined>;
type Media = Exclude<Exclude<Product['media'], undefined>['mainMedia'], undefined>;
type CartTotals = Exclude<Awaited<ReturnType<WixAPI['getCartTotals']>>, undefined>;

export function createProducts(
    numOfItems?: number,
    differentRatioImage?: boolean
): Awaited<ReturnType<WixAPI['getAllProducts']>> {
    return Array.from(new Array(numOfItems || 10)).map((id) =>
        createProduct(id, differentRatioImage)
    );
}

export function createProduct(id?: string, differentRatioImage?: boolean): Product {
    const numOfImages = faker.number.int({ min: 2, max: 4 });
    const images = Array.from(new Array(numOfImages)).map(() => createImage(differentRatioImage));
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
        additionalInfoSections: [
            { title: 'PRODUCT INFO', description: faker.lorem.paragraph() },
            { title: 'RETURN & REFUND POLICY', description: faker.lorem.paragraph() },
            { title: 'SHIPPING INFO', description: faker.lorem.paragraph() },
        ],
        collectionIds: [],
        customTextFields: [],
        inventoryItemId: '',
        numericId: '',
        productOptions: [],
        ribbons: [],
        variants: [],
    };
}

export function createImage(differentRatioImage?: boolean): Media {
    let width = 640;
    let height = 480;
    if (differentRatioImage) {
        width = faker.number.int({ min: 400, max: 900 });
        height = faker.number.int({ min: 400, max: 900 });
    }
    return {
        _id: faker.string.uuid(),
        image: {
            url: faker.image.urlPicsumPhotos({
                grayscale: true,
                width: width,
                height: height,
            }),
            width: width,
            height: height,
        },
        title: faker.lorem.word(),
        mediaType: products.MediaItemType.image,
    };
}

export function createCart(products: products.Product[]): Cart {
    return {
        _id: faker.string.uuid(),
        currency: '$',
        lineItems: products.map(createCartItem),
        appliedDiscounts: [],
        conversionCurrency: 'USD',
        weightUnit: WeightUnit.KG,
    };
}

export function getCartTotals(numOfProducts: number): CartTotals {
    return {
        currency: '$',
        additionalFees: [],
        appliedDiscounts: [],
        calculatedLineItems: [],
        violations: [],
        weightUnit: WeightUnit.KG,
        priceSummary: {
            subtotal: createPrice(),
        },
    };
}

export function createCartItem(product: products.Product): Cart['lineItems'][0] {
    return {
        _id: faker.string.uuid(),
        productName: {
            original: product.name!,
            translated: product.name,
        },
        quantity: faker.number.int({ min: 1, max: 10 }),
        image: product.media!.mainMedia!.image!.url!,
        paymentOption: PaymentOptionType.FULL_PAYMENT_ONLINE,
        price: createPrice(),
        descriptionLines: [],
        url: '',
    };
}

function createPrice() {
    const priceStr = faker.commerce.price({ symbol: '$' });
    const price = parseFloat(priceStr.replace('$', ''));

    return {
        amount: price.toString(),
        convertedAmount: price.toString(),
        formattedConvertedAmount: priceStr,
        formattedAmount: priceStr,
    };
}
