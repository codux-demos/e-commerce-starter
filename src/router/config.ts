import { generatePath } from 'react-router-dom';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products/:category';
const PRODUCT = `${PRODUCTS}/:id`;

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    products: { path: PRODUCTS, to: (category: string) => generatePath(PRODUCTS, { category }) },
    product: {
        path: PRODUCT,
        to: (productId: string) => generatePath(PRODUCT, { id: productId }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { id: string };
    [PRODUCTS]: { category: string };
};
