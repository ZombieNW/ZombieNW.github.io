<script>
	import Space from '$lib/components/Space.svelte';

	export var title = '';
	export var img = '';
	export var color = '';

	const colorMap = {
		green: 'rgb(34 197 94 / 0.4)',
		red: 'rgb(239 68 68 / 0.4)',
		blue: 'rgb(59 130 246 / 0.4)',
		amber: 'rgb(245 158 11 / 0.4)',
		white: 'rgb(255 255 255 / 0.4)',
		black: 'rgb(0 0 0 / 0.4)',
		purple: 'rgb(168 85 247 / 0.4)'
	};
</script>

<div class="relative h-[60vh] w-full overflow-hidden bg-gray-950">
	<div class="absolute inset-0 z-0">
		<div
			class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-950"
			style="background-color: {colorMap[color]}"
		></div>

		<Space backgroundColor="transparent" class="h-full w-full opacity-80" />

		<div class="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent"></div>
	</div>

	<div class="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-12">
		{#if title}
			<img src={img} alt="{title} project logo" class="max-h-2/3 object-contain" />
			<h1 class="text-6xl font-black text-outline md:text-7xl drop-shadow-2xl -mt-12">
				{title}
			</h1>
		{:else}
			<img src={img} alt="{title} project logo" class="max-h-full object-contain" />
		{/if}
	</div>
</div>
