# Matthew Web Free Game Hub — community chat (private beta)

The package adds one globally available floating chat widget. All visitors read the same messages. Signed-in members can post, report messages, and chat with the admin. Messages persist in Supabase and update through Realtime Postgres Changes (with polling fallback).

## Important: not ready for public launch by installing files alone

The chat remains hidden until the environment flag is enabled. An owner must configure Supabase, age/privacy rules, anti-abuse policies, and moderation before enabling it publicly. Gaming sites may attract children: assess COPPA and your audience, update your privacy policy and terms, and ensure someone can moderate and respond to reports.

## Setup

1. Copy/extract these files to the project root, preserving folders. Run `./scripts/Install-CommunityChat.ps1` in PowerShell. That adds the layout import and installs @supabase/supabase-js. The installer saves a `app/layout.js.bak-before-community-chat` backup that should be removed after verification (never commit it).
2. Create a Supabase project at https://supabase.com/dashboard. In Authentication, enable Email sign-in. Check the Email OTP/magic link template, email rate limits, and configure production SMTP for public use. Set Site URL to `https://games.matthew-web.com` and allowed redirect URLs appropriate for production and local testing.
3. Review and run `supabase/community_chat.sql` **once** in Supabase SQL Editor. This creates RLS-protected tables, rate limit trigger, reports, admin policies, and Postgres Changes setup.
4. From Supabase Connect/API settings copy project URL and **publishable** key (not service_role/secret). Set in `.env.local` locally and in Vercel project environment variables (Production):

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_YOUR_PUBLIC_KEY
NEXT_PUBLIC_COMMUNITY_CHAT_ENABLED=true
```

5. Before launch, run `npm run lint`, `npm run build`, then `npx next start -H 0.0.0.0 -p 3000`; visit http://localhost:3000. Verify sign in, nickname, posting, cross-device chat, reporting, deletion, bans, and mobile behavior. Keep environment flag OFF on production until verified.
6. Sign in on the chat yourself, then open Supabase Authentication -> Users to find your auth user UUID. Run in Supabase SQL Editor:

```sql
insert into public.community_admins(user_id) values ('YOUR_AUTH_USER_UUID')
on conflict (user_id) do nothing;
```

7. To use the reserved public nickname `Matthew Web`, first grant yourself admin, then run `update public.community_profiles set display_name = 'Matthew Web' where user_id = 'YOUR_AUTH_USER_UUID';` in SQL Editor. Sign out/in (or reload) and check your admin badge, delete and ban controls. Only the SQL Editor should assign admins.
8. Add chat-specific disclosures to `/privacy-policy` and `/terms`, including retention, reporting, moderation, adult-only participation, email handled by Supabase, and how to request deletion. Set a moderation routine and consider automated screening before public access. A user checkbox by itself is not reliable age verification.
9. Redeploy after configuration. Since NEXT_PUBLIC_* variables are embedded into browser bundles at build time, changing Vercel env vars requires a new deployment.

## Security boundaries

- Only Supabase **publishable** key is public. Never expose secret keys, service role credentials, or admin SQL.
- Email addresses are handled by Supabase Auth and not included in public messages.
- Database trigger enforces one message per 12 seconds, age-attested profile, link/email restriction, and server-assigned admin badges. Client controls alone are not a security boundary.
- All messages are PUBLIC and readable without login. There are no private messages, attachments, images, clickable links, or direct user-to-user contact tools.
- Reports are visible to admins in Supabase and flagged on visible messages when admin is signed in. Admins can delete messages and ban accounts.
- Manual moderation and server-side security still need review before public release. A chat can attract spam, harassment, and personal data. This is not an automated full moderation solution.
- Supabase Postgres Changes is appropriate for early low traffic; migrate to Broadcast if usage grows substantially.

## Troubleshooting

- Button not visible: verify all three `NEXT_PUBLIC_*` variables and rebuild. Button is hidden when disabled.
- `Chat unavailable`: table SQL/RLS grants not applied or URL/key mismatch.
- Email not arriving: Authentication Email settings, provider SMTP, rate limits, or invalid allowed redirect.
- Messages not appearing in real time: check Supabase Realtime publication / websocket; polling backup refreshes every 20 seconds.
- `Not allowed to post`: set up your profile or check if account is banned. Rate limit is 12 seconds.
- If site-wide game UI changes unexpectedly, set `NEXT_PUBLIC_COMMUNITY_CHAT_ENABLED=false` and redeploy; no existing game-player source is modified.

## Testing before commit

Run `git diff --stat`, `git diff --check`, `npm run lint`, `npm run build`, and manually verify existing games and fullscreen still work. Remove `.bak` files. Stage only intended new files, `app/layout.js`, `package.json`, and `package-lock.json`. Never stage `.env.local`.
