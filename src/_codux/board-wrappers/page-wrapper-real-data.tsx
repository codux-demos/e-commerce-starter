import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';
import { WixAPIContextProvider } from '../../api/WixAPIContextProvider';

export function PageWrapperRealData(props: { path?: string; children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <SiteWrapper />,
            children: [{ index: true, element: props.children }],
        },
    ]);

    return (
        <WixAPIContextProvider>
            <RouterProvider router={router} />
        </WixAPIContextProvider>
    );
}
