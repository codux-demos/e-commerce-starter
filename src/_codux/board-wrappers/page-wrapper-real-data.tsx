import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';
import { ROUTES } from '../../router/config';
import { WixAPIContextProvider } from '../../api/wix-api-context-provider';

type Props = {
    children: React.ReactNode;
    productSlug?: string;
};

export function PageWrapperRealData(props: Props) {
    const route = props.productSlug ? ROUTES.product.route : undefined;
    const path = props.productSlug ? ROUTES.product.to(props.productSlug) : '/';

    const router = createMemoryRouter(
        [
            {
                path: '/',
                element: <SiteWrapper />,
                children: [{ index: true, element: props.children, path: route }],
            },
        ],
        { initialEntries: [path] }
    );
    return (
        <WixAPIContextProvider>
            <RouterProvider router={router} />
        </WixAPIContextProvider>
    );
}
