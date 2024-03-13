import { generatePath } from 'react-router-dom';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products';
const PRODUCT = `/product/:slug`;

export const ROUTES = {
    home: { route: HOME, to: () => HOME },
    about: { route: ABOUT, to: () => ABOUT },
    products: { route: PRODUCTS, to: () => PRODUCTS },
    product: {
        route: PRODUCT,
        to: (productSlug: string) => generatePath(PRODUCT, { slug: productSlug }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { slug: string };
};
