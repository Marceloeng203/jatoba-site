// Conexão com o Supabase usada no navegador.
// As chaves ficam no arquivo .env.local (que NÃO vai pro GitHub).
import { createBrowserClient } from "@supabase/ssr";

export function criarClienteSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
