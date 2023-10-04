import { RouterProvider } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './query-client';
import { router } from './routers/Router';

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};
