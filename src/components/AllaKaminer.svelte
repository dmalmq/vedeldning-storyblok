<script>
    import { useStoryblokApi } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import ProduktCard from './ProduktCard.svelte';
    export let blok;
    let produkter = [];
    onMount(async () => {
        const storyblokApi = useStoryblokApi();
        const { data } = await storyblokApi.get('cdn/stories', {
            version: 'draft',
            starts_with: 'kamin',
            is_startpage: false
        });
        articles = data.stories;
    });
</script>
<div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{blok.title}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
        {#each produkter as produkt}
            <ProduktCard article={produkt.content} slug={produkt.full_slug} />
        {/each}
    </div>
</div>