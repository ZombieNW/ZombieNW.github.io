import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		appDir: 'app',
		adapter: adapter(),
		prerender: {
			handleMissingId: 'ignore'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
