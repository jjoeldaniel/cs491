import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const getSupabaseClient = async () => {
  let clerkToken = null;
  
  // Grab the token from Clerk if the user is signed in on the client
  if (typeof window !== 'undefined' && window.Clerk?.session) {
    clerkToken = await window.Clerk.session.getToken();
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: async (url, options = {}) => {
        const headers = new Headers(options?.headers);
        if (clerkToken) {
          headers.set('Authorization', `Bearer ${clerkToken}`);
        }
        return fetch(url, { ...options, headers });
      }
    }
  });
};