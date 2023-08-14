<script>
    import { storyblokEditable } from '@storyblok/svelte';
    export let produkt;
    export let slug;
</script>
<a
    href="/{slug}"
    use:storyblokEditable={produkt}
    class="w-full h-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
>
    <img
        src="{produkt.image.filename}/m/600x0"
        alt={produkt.image.alt}
        class="w-full h-48 xl:h-72 object-cover pointer-events-none"
    />
    <div class="p-4">
        <h3 class="text-xl text-[#1d243d] font-bold mb-3">
            {produkt.title}
        </h3>
        <div class="line-clamp-4">
            {produkt.teaser}
        </div>
    </div>
</a>