<script>
	import '../app.css';
</script>

<main
	class="relative overflow-x-hidden bg-main-mobile bg-contain bg-right-top bg-no-repeat md:bg-main-tablet lg:bg-main-desktop lg:bg-cover"
>
	<slot />
</main>

<style lang="postcss">
	:global(main) {
		font-family: 'IBM Plex Sans', sans-serif;
	}
</style>
