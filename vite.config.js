import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		// enhancedImages(), // must come before the SvelteKit plugin
		sveltekit()
	]
});

// learn how to use this plug in @ https://svelte.dev/docs/kit/images

