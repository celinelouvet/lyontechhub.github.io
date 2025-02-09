import type { APIRoute } from 'astro';
import { getList } from '../lib/communities.ts';

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(getList()));
  } catch (error) {
    throw new Error('Something went wrong in communities.json route!');
  }
};
