# The World of Nerdy Tim

A personal blog about Linux desktops, audio plugins, Zig, and other nerdy detours.

Built with [Astro](https://astro.build) and hosted on [Cloudflare Workers](https://workers.cloudflare.com)
with static assets. Content lives in `src/content/blog/` as Markdown or MDX.

## Commands

| Command              | Action                                        |
| :------------------- | :-------------------------------------------- |
| `npm install`        | Install dependencies                          |
| `npm run dev`        | Start the dev server at `localhost:4321`      |
| `npm run build`      | Build the production site to `./dist/`        |
| `npm run preview`    | Preview the Astro build locally               |
| `npm run deploy`     | Build and deploy to Cloudflare Workers        |
| `npm run preview:worker` | Build and run the site in the Workers runtime |
| `npm run astro`      | Run Astro CLI commands                        |

## Adding a post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: 'My new post'
description: 'A short summary shown in lists and feeds.'
pubDate: 'Nov 19 2026'
tags: ['linux', 'programming']
---

Your content here.
```

Optional frontmatter: `updatedDate`, `heroImage`, and `tags` (defaults to an empty list). Tagged posts
are listed on `/blog/tags/` and on a page for each tag, e.g. `/blog/tags/linux/`.

### Adding a top image to a post

Put the image in `src/assets/images/` and add its filename to the post's frontmatter:

```markdown
heroImage: 'my-photo.webp'
```

The filename can be used with or without its extension. The image is shown at the top of the post,
used as its social preview, and optimized automatically at build time.

The home and blog pages share the photo `src/assets/images/pexels-pixabay-262508.webp`, and the About
page uses a personal photo at `src/assets/images/about.jpg`. The remaining hero illustrations live
in `src/assets/illustrations/` as SVG sources. After editing them, regenerate their WebP files in
`src/assets/images/` with:

```sh
node scripts/build-hero-images.mjs
```

## Deployment

The site is deployed as a Cloudflare Worker with static assets. [wrangler.jsonc](./wrangler.jsonc)
points the Worker at the `dist/` directory produced by Astro.

```sh
npx wrangler login   # once per machine
npm run deploy
```

The site is served at:

<https://worldoftim.org>

`site` in `astro.config.mjs` is set to this hostname so canonical URLs, the sitemap, RSS links, and
social preview images use the correct domain. The Cloudflare Worker domain must be configured for
`worldoftim.org` in the Cloudflare dashboard for the deployed site to serve there.

## License

Content © Tim Lauridsen. Theme based on Astro's blog starter, which is based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
