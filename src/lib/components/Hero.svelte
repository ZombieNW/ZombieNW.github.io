<script>
	import Space from '$lib/components/Space.svelte';
</script>

<div class="relative h-[70vh] w-full overflow-hidden bg-gray-950">
	<div class="absolute inset-0 z-0">
		<div
			class="absolute inset-0 bg-linear-to-b from-purple-800/40 via-purple-950/40 to-gray-950"
		></div>

		<Space backgroundColor="transparent" class="h-full w-full opacity-80" />

		<div class="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent"></div>
	</div>

	<div
		class="relative z-10 flex h-full w-full flex-col items-center justify-center md:flex-row md:px-12"
	>
		<div class="md:h-2/3 md:text-left text-center">
			<h2 class="text-3xl font-black text-outline leading-20 md:text-[6rem] drop-shadow-2xl">
				Hi, It's Me,
			</h2>
			<h1 class="text-5xl font-black text-outline md:text-[10rem] drop-shadow-2xl">ZombieNW</h1>
			<h3 class="text-2xl font-bold text-outline leading-4 md:text-[2.5rem] drop-shadow-lg">
				Programmer, YouTuber, Mediocre Joke Maker
			</h3>
		</div>

		<div class="flex justify-center md:h-2/3 md:flex-1">
			<img
				src="/logo.png"
				class="aspect-square h-[15vw] w-[15vw] min-w-[150px] drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
				alt="A yellow star with a blue sword with a brown hilt going through it."
			/>
		</div>
	</div>
</div>
