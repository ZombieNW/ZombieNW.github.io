<script>
	export let direction = 'left';
	export let title = 'Title';
	export let desc = 'Description';
	export let link = '';
	export let img = 'https://placehold.co/600x400';
	export let downloadtext = 'Download';
	export let color = 'white';

	const colorMap = {
		green: { bg: 'rgb(34 197 94 / 0.2)', border: 'rgb(34 197 94 / 0.3)' },
		red: { bg: 'rgb(239 68 68 / 0.2)', border: 'rgb(239 68 68 / 0.3)' },
		blue: { bg: 'rgb(59 130 246 / 0.2)', border: 'rgb(59 130 246 / 0.3)' },
		amber: { bg: 'rgb(245 158 11 / 0.2)', border: 'rgb(245 158 11 / 0.3)' },
		white: { bg: 'rgb(255 255 255 / 0.2)', border: 'rgb(255 255 255 / 0.3)' },
		black: { bg: 'rgb(0 0 0 / 0.2)', border: 'rgb(128 128 128 / 0.3)' },
		purple: { bg: 'rgb(168 85 247 / 0.2)', border: 'rgb(168 85 247 / 0.3)' }
	};

	$: colors = colorMap[color] || colorMap.white;
	$: isRight = direction === 'right';
</script>

<div
	class="project-card flex flex-col items-start gap-3 p-5 m-6 h-96 shadow-lg border-2 rounded-xl transition-transform duration-500 hover:scale-[1.01]"
	style="background-color: {colors.bg}; border-color: {colors.border};"
>
	<div class="w-full flex items-center justify-center h-full" class:flex-row-reverse={isRight}>
		<div
			class="md:w-1/2 mx-auto text-center md:text-left"
			class:pl-4={isRight}
			class:pr-4={!isRight}
		>
			<h2 class="text-4xl font-bold py-2">{title}</h2>
			<p class="text-l pb-6">{desc}</p>
			{#if link}
				<a
					href={link}
					class="inline-block py-4 border-2 rounded-xl transition-all duration-300 hover:scale-[103%] w-1/2 text-center"
					style="background-color: {colors.bg}; border-color: {colors.border};"
				>
					{downloadtext}
				</a>
			{/if}
		</div>
		<img src={img} alt={title} class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
	</div>
</div>
