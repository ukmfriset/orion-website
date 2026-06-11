import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'wot5da6b',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})