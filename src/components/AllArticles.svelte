 <script>
    import { useStoryblokApi } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import ArticleCard from './ArticleCard.svelte';
    export let blok;
    let articles = [];
    onMount(async () => {
        const storyblokApi = useStoryblokApi();
        const { data } = await storyblokApi.get('cdn/stories', {
            version: 'draft',
            starts_with: 'blog',
            is_startpage: false
        });
        articles = data.stories;
    });
</script>
<div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{blok.title}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
        {#each articles as article}
            <ArticleCard article={article.content} slug={article.full_slug} />
        {/each}
    </div>
</div>