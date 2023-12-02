import axios from 'axios';
 
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1';
 
export const supabase = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: 'return=representation',
    },
    patch: {
      Prefer: 'return=representation',
    },
  },
});
