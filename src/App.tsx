import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/routes';
import { WixAPIContextProvider } from './components/contexts/WixAPIContextProvider';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return (
        <WixAPIContextProvider>
            <RouterProvider router={router} />
        </WixAPIContextProvider>
    );
}

export default App;
