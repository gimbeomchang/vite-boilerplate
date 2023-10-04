import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@apis/QueryKeys';

const getSamples = () => {
    return [];
};

export const useGetSamples = () => {
    return useQuery({
        queryFn: getSamples,
        queryKey: QUERY_KEYS.SAMPLE.list(),
    });
};
