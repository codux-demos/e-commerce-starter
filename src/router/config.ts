import { generatePath } from 'react-router-dom';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products';
const PRODUCT = `${PRODUCTS}/:id`;

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    products: { path: PRODUCTS, to: () => PRODUCTS },
    product: {
        path: PRODUCT,
        to: (productId: number) => generatePath(PRODUCT, { id: productId.toString() }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { id: string };
};
