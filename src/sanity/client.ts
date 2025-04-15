import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';
dotenv.config();

export const client = createClient({
  projectId: process.env.VITE_API_KEY,
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false,
});
