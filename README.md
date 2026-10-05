# mint-docs

**MINT Guides**: the user documentation for MINT, served on its own subdomain
(**docs.mintapp.shop**). It has 19 guides covering your account, your organization, projects, the builders
(models, pages, sidebar, dashboard, media, your own AI), records, and going live
(public API, customer sign-in, site widgets, websites, analytics), plus an FAQ.

Next.js 16 (App Router, every page static) · Tailwind CSS v4 · Outfit and JetBrains Mono ·
Phosphor icons · light and dark mode. The look follows the marketing site
(`mint-webpage`): the same tokens, logo and light uppercase headings.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3200
```

| Variable | What it's for | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | This site: canonical URLs, sitemap, Open Graph | `https://docs.mintapp.shop` |
| `NEXT_PUBLIC_APP_URL` | The MINT app (tenant panel): Open MINT, and every link to a screen | `https://app.mintapp.shop` |
| `NEXT_PUBLIC_API_URL` | The backend root, used for the API addresses and `<script>` tags in the guides | `https://api.mintapp.shop` |
| `NEXT_PUBLIC_WEBSITE_URL` | The marketing site, linked from the footer | `https://mintapp.shop` |

## How it's put together

| Where | What |
|---|---|
| `src/content/guides.ts` | Every guide: its name, line, icon, group and topics. It feeds the home page, header, footer, search and sitemap. **A new guide must be added here.** |
| `src/app/<guide>/page.tsx` | One guide each: `SECTIONS` (the "On this page" list), then the text |
| `src/components/docs/Guide.tsx` | A guide's frame: its header, the link to the screen in MINT, "On this page", and previous/next |
| `src/components/docs/prose.tsx` | The text pieces: `Section`, `H3`, `P`, `C`, `A`, `List`, `Note`, `Terms`, `CodeBlock` |
| `src/components/site/*` | Header (with search: `/` or ⌘K), footer, logo, theme toggle |
| `src/lib/config.ts` | `APP_URL`, `API_ORIGIN`, `PUBLIC_API` |

Links in the text: `<A href='/models#models-fields'>` goes to another guide on this site.
`<A href={`${APP_URL}/projects`}>` opens that screen in MINT in a new tab.

## Keep it in step with the app

The guides were first written inside the app, at admin `src/app/user-docs/*`, and the text pieces
here have the same names and props, so a guide can be copied across unchanged. The paths and
`#anchor` ids are the same as the app's (`/user-docs/models#models-fields` here is
`/models#models-fields`), so the app's "How this works" links can point here.
**When a feature changes, update its guide here** and keep the section ids the same.

## Deploy

This is a static Next.js site. Import the repo into Vercel as its own project, set the variables above,
and add the domain `docs.mintapp.shop`. In DNS, point a `CNAME` for `docs` at `cname.vercel-dns.com`.
