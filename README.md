# semihcaglar.github.io

Personal portfolio website for Semih Çağlar. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), statically generated and deployed to GitHub Pages.

## Stack

- Astro (static output)
- Tailwind CSS v4
- Astro content collections for structured content
- `@astrojs/sitemap` for `sitemap.xml`
- GitHub Actions → GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs the static site to `dist/`. `npm run preview` serves that build locally so you can sanity-check it before deploying.

## Deploying to GitHub Pages

This repo deploys automatically via [.github/workflows/deploy.yml](.github/workflows/deploy.yml) on every push to `main`.

One-time setup on GitHub:

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it.

Because this repo is named `<username>.github.io`, it's a user site and is served from the domain root (`https://semihcaglar.github.io`) with no extra path — no `base` config is needed in `astro.config.mjs`.

### Connecting a custom domain later

1. Add a `CNAME` file to `public/` containing your domain (e.g. `example.com`), or set it in the Pages settings UI — either way GitHub writes it into the deployed site.
2. Update `site` in [astro.config.mjs](astro.config.mjs) to your new domain, and the `Sitemap:` line in [public/robots.txt](public/robots.txt).
3. Point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Updating your information

All CV-derived content lives in structured data files, separate from the page templates, so you can update it without touching component code.

**Site-wide facts** (name, headline, intro, education, social links, skills) — edit [src/data/site.ts](src/data/site.ts).

**Repeatable content** — each item is one JSON file in a content collection. Add, remove, or edit files to change what appears on the site:

| Section | Folder |
| --- | --- |
| Experience | [src/content/experience/](src/content/experience) |
| Projects | [src/content/projects/](src/content/projects) |
| Publications | [src/content/publications/](src/content/publications) |
| Awards & Honors | [src/content/awards/](src/content/awards) |

To add a new entry, copy an existing JSON file in the relevant folder, fill in the fields (the schema is enforced in [src/content.config.ts](src/content.config.ts) — a build fails loudly if a required field is missing or the wrong type), and give it an `order` value to control where it sorts. Set `"featured": true` to have an entry show up in that section's preview on the homepage.

**CV file** — replace [public/cv/semih-caglar-cv.pdf](public/cv/semih-caglar-cv.pdf) with an updated export, keeping the same filename (or update the path referenced in [src/pages/cv.astro](src/pages/cv.astro) if you rename it).

**Profile photo** — the homepage currently shows an initials placeholder. To use a real photo, add an image to `public/` and replace the placeholder `<div>` in [src/pages/index.astro](src/pages/index.astro) with an `<img>` tag pointing at it.

After editing content, run `npm run build` locally to confirm the site still builds before pushing.

## Notes on sourcing

All copy on this site is derived directly from the CV — no invented achievements, dates, or metrics. A few things were intentionally left out because the CV didn't specify them (individual GitHub/demo links for the Deep Review and SplitMate projects, and a profile photo). Add them via the data files above whenever they're available.
