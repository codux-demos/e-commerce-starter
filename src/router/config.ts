import { generatePath } from 'react-router-dom';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products';
const PRODUCT = `/product/:id`;

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    products: { path: PRODUCTS, to: () => PRODUCTS },
    product: {
        path: PRODUCT,
        to: (productId: string) => generatePath(PRODUCT, { id: productId }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { id: string };
};
