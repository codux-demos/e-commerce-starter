import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { FakeWixAPIContextProvider, FakeDataSettings } from '../fakeData/FakeWixAPIContextProvider';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';

type Props = {
    children: React.ReactNode;
    settings?: FakeDataSettings;
};
}

export function PageWrapper(props: Props) {
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
