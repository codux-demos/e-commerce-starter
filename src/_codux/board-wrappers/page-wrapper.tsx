import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FakeWixAPIContextProvider, WixApiSettings } from '../fakeData/FakeWixAPIContextProvider';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';

export function PageWrapper(props: { children: React.ReactNode; settings?: WixApiSettings }) {
    const router = createMemoryRouter([
        {
            path: '*',
            element: <SiteWrapper />,
            children: [{ index: true, element: props.children }],
        },
    ]);

    return (
        <FakeWixAPIContextProvider settings={props.settings}>
            <RouterProvider router={router} />
        </FakeWixAPIContextProvider>
    );
}
