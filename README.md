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

Optional frontmatter: `updatedDate`, `heroImage` (a relative path to an image in `src/assets/`), and
`tags` (defaults to an empty list). Tagged posts are listed on `/blog/tags/` and on a page for each
tag, e.g. `/blog/tags/linux/`.

## Deployment

The site is deployed as a Cloudflare Worker with static assets. [wrangler.jsonc](./wrangler.jsonc)
points the Worker at the `dist/` directory produced by Astro.

```sh
npx wrangler login   # once per machine
npm run deploy
```

The site is served at:

<https://the-world-of-nerdy-tim.tim-lauridsen.workers.dev>

To use a custom domain, add a route or custom domain to the Worker in the Cloudflare dashboard,
then update `site` in `astro.config.mjs` so canonical URLs and the sitemap stay correct.

## License

Content © Tim Lauridsen. Theme based on Astro's blog starter, which is based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
