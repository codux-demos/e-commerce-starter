import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [{ index: true, element: <div>Home</div> }],
    },
];
