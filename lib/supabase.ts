import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const isValidUrl = (url: string) => {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "http:" || parsed.protocol === "https:"
  } catch {
    return false
  }
}

export const supabase = createClient(
  isValidUrl(supabaseUrl) ? supabaseUrl : "https://placeholder.supabase.co",
  supabaseKey || "placeholder-key"
)
