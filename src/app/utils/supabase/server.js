// import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export const createServerUser = () => {
//   const cookieStore = cookies();

//   return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL_USERS!, process.env.NEXT_PUBLIC_SERVICE_KEY_USERS!, {
//     cookies: {
//       get(name: string) {
//         return cookieStore.get(name)?.value;
//       },
//       set(name: string, value: string, options: CookieOptions) {
//         try {
//           cookieStore.set({ name, value, ...options });
//         } catch (error) {}
//       },
//       remove(name: string, options: CookieOptions) {
//         try {
//           cookieStore.set({ name, value: "", ...options });
//         } catch (error) {}
//       },
//     },
//   });
// };

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createServerUser() {
  const cookieStore = await cookies();

  // Create a server's supabase client with newly configured cookie
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL_USERS, process.env.NEXT_PUBLIC_SERVICE_KEY_USERS, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // If `setAll` is called in a server-side component, ignore errors
        }
      },
      remove(name, options) {
        try {
          cookieStore.delete(name, options);
        } catch (error) {
          console.error("Error removing cookie:", error);
        }
      },
    },
  });
}
