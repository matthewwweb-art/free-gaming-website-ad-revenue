import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const communityEnabled =
  process.env.NEXT_PUBLIC_COMMUNITY_CHAT_ENABLED === "true" &&
  Boolean(url && publishableKey);

// Only the publishable public key belongs in the browser. NEVER use a secret or service-role key here.
export const communityClient = communityEnabled
  ? createClient(url, publishableKey, {
      auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true },
    })
  : null;
