# The World of Nerdy Tim

A personal blog about Linux desktops, audio plugins, Zig, and other nerdy detours.

Built with [Astro](https://astro.build). Content lives in `src/content/blog/` as Markdown or MDX.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally                   |
| `npm run astro`   | Run Astro CLI commands                      |

> The site is configured with `base: '/the-world-of-nerdy-tim'` for GitHub Pages project hosting,
> so the dev server serves it at <http://localhost:4321/the-world-of-nerdy-tim/>.

## Adding a post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: 'My new post'
description: 'A short summary shown in lists and feeds.'
pubDate: 'Nov 19 2026'
---

Your content here.
```

Optional frontmatter: `updatedDate` and `heroImage` (a relative path to an image in `src/assets/`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages at:

<https://timlau.github.io/the-world-of-nerdy-tim/>

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## License

Content © Tim Lauridsen. Theme based on Astro's blog starter, which is based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
