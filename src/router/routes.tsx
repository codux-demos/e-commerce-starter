import { Navigate, RouteObject } from 'react-router-dom';
import { SiteWrapper } from '../components/site-wrapper/site-wrapper';
import { HomePage } from '../pages/home-page/home-page';
import { AboutPage } from '../pages/about-page/about-page';
import { ROUTES } from './config';
import { ProductPage } from '../pages/product-page/product-page';
import { ProductsPage } from '../pages/products-page/products-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { path: ROUTES.home.path, index: true, element: <HomePage /> },
            { path: ROUTES.products.path, element: <ProductsPage /> },
            { path: ROUTES.product.path, element: <ProductPage /> },
            { path: ROUTES.about.path, element: <AboutPage /> },
        ],
    },
];
