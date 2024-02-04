import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FakeWixAPIContextProvider } from '../fakeData/FakeWixAPIContextProvider';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';

export function PageWrapper(props: { path?: string; children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '*',
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
