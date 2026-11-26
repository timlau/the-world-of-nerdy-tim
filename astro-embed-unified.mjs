// @ts-check

import { isUnifiedProcessor } from '@astrojs/markdown-remark';
import embeds from 'astro-embed/integration';

/**
 * `astro-embed` still registers its remark plugin via the deprecated
 * `markdown.remarkPlugins` config key. Wrap its integration so the plugin goes
 * straight onto the `unified()` processor instead, avoiding Astro 7's warning.
 */
export function embedIntegrations() {
	const [autoImport, embed] = embeds();
	const setup = embed.hooks['astro:config:setup'];

	return [
		autoImport,
		{
			name: embed.name,
			hooks: {
				...embed.hooks,
				'astro:config:setup': (params) =>
					setup({
						...params,
						updateConfig: (newConfig) => {
							const processor = params.config.markdown.processor;
							const plugins = newConfig.markdown?.remarkPlugins ?? [];
							if (plugins.length === 0 || !isUnifiedProcessor(processor)) {
								return params.updateConfig(newConfig);
							}

							processor.options.remarkPlugins.push(...plugins);
							const markdown = { ...newConfig.markdown };
							delete markdown.remarkPlugins;
							return params.updateConfig({ ...newConfig, markdown });
						},
					}),
			},
		},
	];
}
