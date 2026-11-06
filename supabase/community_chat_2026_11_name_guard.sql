-- Free Game Hub: reserve official names for verified administrators.
-- Applied to Supabase during November 5, 2026 testing.
-- Do not run again unless rebuilding or migrating the database.

ALTER POLICY community_profiles_insert_self
ON public.community_profiles
WITH CHECK (
  user_id = auth.uid()
  AND adult_attested = true
  AND (
    public.community_is_admin()
    OR display_name !~*
      '(matthew|matt[ _-]*web|moderator|admin|staff|support|official|free[ _-]*game[ _-]*hub)'
  )
);

ALTER POLICY community_profiles_update_self
ON public.community_profiles
WITH CHECK (
  user_id = auth.uid()
  AND adult_attested = true
  AND (
    public.community_is_admin()
    OR display_name !~*
      '(matthew|matt[ _-]*web|moderator|admin|staff|support|official|free[ _-]*game[ _-]*hub)'
  )
);