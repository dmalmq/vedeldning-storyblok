import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Hero from '../components/Hero.svelte';
import Page from '../components/Page.svelte';
import Produkt from '../components/Produkt.svelte';
import Teaser from '../components/Teaser.svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'ew92lcniZs3AzYTdVT8dPgtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			hero: Hero,
			produkt: Produkt
		}
	});
	let storyblokApi = await useStoryblokApi();
	const dataConfig = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	});

	return {
		storyblokApi: storyblokApi,
		header: dataConfig.data.story.content.header_menu
	};
}
