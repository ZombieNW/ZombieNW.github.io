<script>
	export let direction = 'left';
	export let title = 'Title';
	export let desc = 'Description';
	export let link = '';
	export let img = 'https://placehold.co/600x400';
	export let downloadtext = 'Download';
</script>

{#if direction === 'right'}
	<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
		<div class="w-full flex items-center justify-center h-full">
			<img src={img} alt="Retro Tennis 2 Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			<div class="md:w-1/2 pl-4">
				<p class="text-4xl font-bold py-2">{title}</p>
				<p class="text-l pb-6">{desc}</p>
				<div class="flex flex-wrap gap-4">
					{#if link !== ''}
						<a href={link} class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">{downloadtext}</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
		<div class="w-full flex items-center justify-center h-full">
			<div class="md:w-1/2 pr-4">
				<p class="text-4xl font-bold py-2">{title}</p>
				<p class="text-l pb-6">{desc}</p>
				<div class="flex flex-wrap gap-4">
					<a href={link} class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">{downloadtext}</a>
				</div>
			</div>
			<img src={img} alt="Retro Tennis 1 Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
		</div>
	</div>
{/if}

<style>
	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.01);
	}
</style>
