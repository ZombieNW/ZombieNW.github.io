<script>
	export var title = 'Title';
	export var description = 'Description';
	export var img = 'https://placehold.co/600x400';
	export var year = '';
	export var color = 'white';
	export var link = '#';

	const colorMap = {
		green: { bg: 'rgb(34 197 94 / 0.2)', border: 'rgb(34 197 94 / 0.3)' },
		red: { bg: 'rgb(239 68 68 / 0.2)', border: 'rgb(239 68 68 / 0.3)' },
		blue: { bg: 'rgb(59 130 246 / 0.2)', border: 'rgb(59 130 246 / 0.3)' },
		amber: { bg: 'rgb(245 158 11 / 0.2)', border: 'rgb(245 158 11 / 0.3)' },
		white: { bg: 'rgb(255 255 255 / 0.2)', border: 'rgb(255 255 255 / 0.3)' },
		black: { bg: 'rgb(0 0 0 / 0.2)', border: 'rgb(128 128 128 / 0.3)' },
		purple: { bg: 'rgb(168 85 247 / 0.2)', border: 'rgb(168 85 247 / 0.3)' }
	};
</script>

<a
	href={link}
	class="flex flex-col border-2 p-4 rounded-xl aspect-square md:aspect-video hover:scale-[103%] transition-all
	duration-300 overflow-hidden"
	style="background-color: {colorMap[color].bg}; border-color: {colorMap[color].border}"
>
	<div class="flex">
		<h1 class="text-4xl font-bold">{title}</h1>
		{#if year}
			<p
				class="ml-auto text-gray-300 border-2 rounded-xl py-2 px-4 md:block hidden"
				style="border-color: {colorMap[color].border};"
			>
				{year}
			</p>
		{/if}
	</div>
	<p class="text-gray-300">{description}</p>
	<div class="flex-1 min-h-0 flex items-center justify-center p-2">
		<img src={img} alt="{title} project logo" class="max-h-full object-contain" />
	</div>
</a>
