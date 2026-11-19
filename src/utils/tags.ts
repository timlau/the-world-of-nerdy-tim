import type { CollectionEntry } from 'astro:content';
import { url } from './paths';

export function getAllTags(posts: CollectionEntry<'blog'>[]): string[] {
	return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
		a.localeCompare(b),
	);
}

export function tagUrl(tag: string): string {
	return url(`blog/tags/${encodeURIComponent(tag)}/`);
}

const tagPalettes = ['indigo', 'violet', 'teal', 'amber', 'rose', 'lime'];

export function tagPaletteClass(tag: string): string {
	let hash = 0;
	for (let i = 0; i < tag.length; i++) {
		hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
	}
	return `tag-${tagPalettes[hash % tagPalettes.length]}`;
}
