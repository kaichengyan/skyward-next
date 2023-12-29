# Skyward Next

Yet another personal blog powered by Next.js (SSG). The style (and CSS code) is
heavily inspired by [Anthony Fu's blog](antfu.me).

## Use as a theme

Just fork this repo and swap the content in `data/` with your posts and pages.
You will also want to swap the links in the `NavBar` and `Footer` components for
your own social media accounts.

## Dev

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.
