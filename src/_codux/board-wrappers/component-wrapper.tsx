import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FakeWixAPIContextProvider, FakeDataSettings } from '../fakeData/FakeWixAPIContextProvider';

type Props = {
    children: React.ReactNode;
    settings?: FakeDataSettings;
};

export function ComponentWrapper(props: Props) {
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
