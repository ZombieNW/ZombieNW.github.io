<script>
	import Space from '$lib/components/Space.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
</script>

<Header />

<div class="h-[90vh] w-full overflow-hidden bg-gray-950">
	<div class="absolute inset-0 z-0">
		<Space backgroundColor="transparent" class="h-full w-full opacity-80" />

		<div class="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent"></div>
	</div>

	<div class="z-10 flex h-[90vh] w-full flex-col items-center justify-center px-4 md:px-12">
		<h1 class="text-7xl font-black text-outline md:text-9xl drop-shadow-2xl">{$page.status}</h1>
		<p class="text-xl font-bold text-outline">{$page.error.message}</p>
	</div>
</div>
