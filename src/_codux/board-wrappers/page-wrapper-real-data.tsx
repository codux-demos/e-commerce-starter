import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';
import { WixAPI, WixAPIContext, WixAPIContextProvider } from '../../api/wix-api-context-provider';
import { useContext, useEffect, useState } from 'react';

type Props = {
    path?: string | ((wixClient: WixAPI) => Promise<string>);
    route?: string;
    children: React.ReactNode;
};

export function PageWrapperRealData(props: Props) {
    return (
        <WixAPIContextProvider>
            <PartialRouterProvider {...props} />
        </WixAPIContextProvider>
    );
}

function PartialRouterProvider(props: Props) {
    const wixClient = useContext(WixAPIContext);
    const [path, setPath] = useState<string | undefined>(undefined);
    useEffect(() => {
        if (props.path) {
            if (typeof props.path === 'function') {
                props.path(wixClient).then(setPath);
            } else {
                setPath(props.path);
            }
        }
    }, [props.path]);

    if (!path && props.path) return null;

    const router = createMemoryRouter(
        [
            {
                path: '/',
                element: <SiteWrapper />,
                children: [{ index: true, element: props.children, path: props.route }],
            },
        ],
        { initialEntries: [path ?? '/'] }
    );

    return <RouterProvider router={router} />;
}
