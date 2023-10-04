import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            suspense: true,
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
        },
    },
});
