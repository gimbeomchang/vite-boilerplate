export const QUERY_KEYS = {
    SAMPLE: {
        all: ['all'],
        list: () => [...QUERY_KEYS.SAMPLE.all, 'list'],
        item: (id: string) => [...QUERY_KEYS.SAMPLE.all, 'list', id],
    },
} as const;
