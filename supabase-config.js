/**
 * Supabase credentials for Matchify.
 *
 * Setup:
 * 1. Create a free project at https://supabase.com
 * 2. Open SQL Editor and run the full contents of supabase/schema.sql
 * 3. Go to Project Settings → API Keys (or Connect dialog):
 *    - Project URL  → url  (https://xxxxx.supabase.co — no /rest/v1/)
 *    - Publishable key or legacy anon key → anonKey
 * 4. Reload the app. Header badge should show "Supabase".
 *
 * If url/anonKey are left as placeholders, the app falls back to localStorage.
 *
 * Optional: existing localStorage data is auto-uploaded to Supabase
 * the first time you connect to an empty database.
 */
window.MATCHIFY_SUPABASE = {
  url: "https://tnolukxduyoznsgnylgt.supabase.co",
  anonKey: "sb_publishable_hO6iGp9CPtie2wEkWWIWEA_QFqWVD13"
};
