import axios from 'axios';
 
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa3VpZXZ1ZnJlZWZqd252dW9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI5MzU5NywiZXhwIjoyMDE0ODY5NTk3fQ.XLifW8hovrcSmar-NZzTg1zUV9i6OBa5PDBazlPExrQ';
const API_URL = 'https://mjkuievufreefjwnvuos.supabase.co' + '/rest/v1';
 
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
