import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/database"

// Helper pour vérifier si Supabase est configuré
export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return !!(url && key && url.startsWith("http") && key.length > 10)
}

// Factory function pour créer le client Supabase
const createSupabaseClient = () => {
  if (!isSupabaseConfigured()) {
    console.log("Supabase not configured, using fallback data")
    return null
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  } catch (error) {
    console.error("Failed to create Supabase client:", error)
    return null
  }
}

// Export du client (peut être null)
export const supabase = createSupabaseClient()

// Client pour les opérations côté serveur
export const createServerClient = () => {
  if (!isSupabaseConfigured()) {
    return null
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  } catch (error) {
    console.error("Failed to create server Supabase client:", error)
    return null
  }
}
