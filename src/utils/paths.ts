/**
 * Build a site-relative URL that respects the configured `base` path.
 *
 * @example
 * url('blog') // => '/the-world-of-nerdy-tim/blog'
 * url()      // => '/the-world-of-nerdy-tim/'
 */
export function url(path = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	const clean = path.replace(/^\/+/, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}
