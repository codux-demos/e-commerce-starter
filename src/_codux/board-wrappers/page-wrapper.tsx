import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';
import { FakeWixAPIContextProvider } from '../../components/contexts/FakeWixAPIContextProvider';

export function PageWrapper(props: { children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <SiteWrapper />,
            children: [{ index: true, element: props.children }],
        },
    ]);
    return (
        <FakeWixAPIContextProvider>
            <RouterProvider router={router} />
        </FakeWixAPIContextProvider>
    );
}
