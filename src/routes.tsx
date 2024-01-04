import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { ConnectionComponent } from './components/connection-component/connection-component';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <div>Home</div> },
            { path: 'test', element: <ConnectionComponent /> },
        ],
    },
];
