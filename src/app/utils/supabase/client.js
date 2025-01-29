// import { createBrowserClient } from "@supabase/ssr";

// export function createClientUser() {
//   // Create a supabase client on the browser with project's credentials
//   return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL_USERS, process.env.NEXT_PUBLIC_SERVICE_KEY_USERS);
// }

// import { createBrowserClient } from "@supabase/ssr";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_USERS || "";
// const supabaseKey = process.env.NEXT_PUBLIC_SERVICE_KEY_USERS || "";

// const supabase = createBrowserClient(supabaseUrl, supabaseKey);
// export default supabase;

import { createBrowserClient } from "@supabase/ssr";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_USERS || "";
const supabaseKey = process.env.NEXT_PUBLIC_SERVICE_KEY_USERS || "";

export function createClientUser() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(supabaseUrl, supabaseKey);
}
