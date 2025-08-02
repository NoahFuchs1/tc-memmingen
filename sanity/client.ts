import { createClient } from 'next-sanity'


export const client = createClient({
    projectId: 'kefr2bw1', 
    dataset: 'production',
    apiVersion: '2025-08-02',
    useCdn: true,
})