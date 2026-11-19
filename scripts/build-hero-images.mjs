// Export the SVG illustration sources to optimized WebP hero images.
// Run with: node scripts/build-hero-images.mjs
import { mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = path.resolve('src/assets/illustrations');
const outputDir = path.resolve('src/assets/images');

await mkdir(outputDir, { recursive: true });

for (const file of await readdir(sourceDir)) {
	if (!file.endsWith('.svg')) continue;

	const svg = await readFile(path.join(sourceDir, file));
	const name = file.replace(/\.svg$/, '');
	const output = path.join(outputDir, `${name}.webp`);

	await sharp(svg, { density: 144 }).webp({ quality: 88 }).toFile(output);
	console.log(`${file} -> ${path.relative(process.cwd(), output)}`);
}
