<script>
	export let link = '#';
	export let title = 'Coming Soon';
	export let desc = 'The next big thing is always coming.';
	export let img = 'https://placehold.co/600x400';
	export let color = '0000004F';
</script>

<a href={link} style="background-color: #{color}" class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg hover:underline border-2 border-border_t hover:border-border_t_h rounded-xl">
	<p class="text-4xl font-bold">{title}</p>
	<p class="-mt-3 text-l">{desc}</p>
	<img src={img} alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
</a>

<style>
	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.05);
	}
</style>
