import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FakeWixAPIContextProvider, WixApiSettings } from '../fakeData/FakeWixAPIContextProvider';

export function ComponentWrapper(props: { children: React.ReactNode; settings?: WixApiSettings }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: props.children,
        },
    ]);
    return (
        <FakeWixAPIContextProvider settings={props.settings}>
            <RouterProvider router={router} />
        </FakeWixAPIContextProvider>
    );
}
