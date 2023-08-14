<script>
	import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';
 
	export let data;
	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
	
</script>
 
<svelte:head>
  <title>{data.story.name}</title>
</svelte:head>
<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>