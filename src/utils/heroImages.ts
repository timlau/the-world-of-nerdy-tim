import type { ImageMetadata } from 'astro';

// Every hero image lives in src/assets/images/. Drop a new file there and
// reference its filename in a post's `heroImage` frontmatter field.
const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif,gif}', {
	eager: true,
});

type ImageModule = { default: ImageMetadata };

const images = new Map<string, ImageMetadata>(
	Object.entries(modules).map(([path, module]) => [
		path.substring(path.lastIndexOf('/') + 1),
		(module as ImageModule).default,
	]),
);

function stem(filename: string): string {
	return filename.replace(/\.[^.]+$/, '');
}

function find(name: string): ImageMetadata | undefined {
	const filename = name.trim().replaceAll('\\', '/').split('/').pop() ?? '';
	return (
		images.get(filename) ??
		[...images.entries()].find(([file]) => stem(file) === stem(filename))?.[1]
	);
}

/** Resolve a hero image by filename (with or without extension or directory). */
export function getHeroImage(name?: string): ImageMetadata | undefined {
	if (!name) return undefined;

	const image = find(name);
	if (!image) {
		throw new Error(
			`Hero image "${name}" was not found in src/assets/images/. ` +
				`Available images: ${[...images.keys()].join(', ') || '(none)'}`,
		);
	}
	return image;
}

function pageHero(name: string): ImageMetadata {
	const image = find(name);
	if (!image) throw new Error(`Missing page hero image: ${name}`);
	return image;
}

// Hero images used by the static pages.
export const homeHero = pageHero('pexels-pixabay-262508');
export const aboutHero = pageHero('about');
export const blogHero = pageHero('pexels-pixabay-262508');
export const tagsHero = pageHero('tags');
export const notFoundHero = pageHero('404');
