# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (default `http://127.0.0.1:3000`).
- `npm run build` — production build. Note: `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so the build will succeed despite TS errors. Run `tsc --noEmit` manually if you need real type checking.
- `npm run start` — serve the production build.
- `npm run lint` — ESLint via `eslint.config.mjs` (extends `eslint-config-next/core-web-vitals`). Next.js 16 has no `next lint` CLI, so always invoke ESLint through this script.
- `npm run assess:http` — hits a fixed list of App Router pages on a running server and reports HTTP status. Override the target with `ASSESS_BASE_URL=https://example.com npm run assess:http`. Edit the `paths` array in `scripts/assess-http.mjs` when adding new top-level routes.
- `npm run lighthouse -- <full-url> --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new" --output=html --output-path=lighthouse-report.html` — Lighthouse audit against a reachable URL.

There is no test runner configured.

## Architecture

Next.js 16 App Router project (React 19, TypeScript, Tailwind v4, shadcn/ui in "new-york" style with `neutral` base color). Originally scaffolded with v0.app (`generator: 'v0.app'` in metadata) and still receives v0-generated PRs.

**Path aliases.** `@/*` maps to the repo root (see `tsconfig.json`). `components.json` defines the shadcn aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`. Use these instead of relative paths.

**Routing.** All pages live under `app/` as App Router routes (`page.tsx` per route, shared `app/layout.tsx`). Top-level marketing routes: `about`, `services`, `the-fuller-approach`, `why-fuller-horizons`, `case-studies`, `insights`, `blog`, `contact`. Page-specific section components live in `components/<route>/` (e.g. `components/home/*` are the homepage sections composed in `app/page.tsx`).

**Fonts.** Three Google fonts (DM Sans, Playfair Display, Cormorant Garamond) are loaded in `app/layout.tsx` and exposed as CSS variables (`--font-dm-sans`, etc.) consumed by Tailwind in `app/globals.css`.

**Blog (MDX).** Posts are file-system content in `content/blog/*.mdx` with gray-matter frontmatter (`title`, `date`, `excerpt`, `author`, `published`). `lib/blog.ts` reads them at build time:
- `getAllPosts()` filters out posts where `published !== true` and sorts by date desc — drafts must set `published: false` (or omit it) to stay off the public list.
- `getAllSlugs()` returns every `.mdx` slug (including unpublished) and is what `app/blog/[slug]/generateStaticParams` should use if you want drafts pre-rendered.
- Rendering uses `next-mdx-remote` with custom components in `components/blog/mdx-components.tsx`.

**Contact form.** `app/api/contact/route.ts` POSTs to Resend. Required env: `RESEND_API_KEY` (without it the route returns 500). Optional env: `CONTACT_EMAIL` (recipient; defaults to `contact@fullerhorizons.net`). The `from` address is hardcoded to `onboarding@resend.dev` — change this once a verified sending domain is configured in Resend. Logs are prefixed `[v0]`.

**UI layer.** `components/ui/*` is a full shadcn/ui set (Radix primitives + CVA). Compose these rather than reaching for raw Radix. The `cn()` helper in `lib/utils.ts` (clsx + tailwind-merge) is the canonical way to combine class names.

**Images.** `next.config.mjs` sets `images.unoptimized: true`, so `next/image` will not transform images. Keep that in mind when judging performance — manually size and compress assets in `public/`.

## Site assessment workflow

`.cursor/rules/site-assessment.mdc` defines the canonical "full site audit" procedure (lint → build → routes/data → security → a11y → perf → runtime via `assess:http` → optional Lighthouse). When the user asks to "assess the site" or run a full audit, follow that order and report concrete evidence (command output, file paths, scores).
