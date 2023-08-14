<script>
	import '../app.postcss';
	import Header from "../components/Header.svelte";
	export let data;
</script>

<main>
	<Header header={data.header} />
	<slot />
</main>