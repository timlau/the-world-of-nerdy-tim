/**
 * Build a site-relative URL that respects the configured `base` path.
 *
 * @example
 * url('blog') // => '/blog' when the base is '/'
 * url()      // => '/' when the base is '/'
 */
export function url(path = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	const clean = path.replace(/^\/+/, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}
