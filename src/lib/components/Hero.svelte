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
		class="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:flex-row md:px-12"
	>
		<div class="text-center md:h-2/3 md:text-left">
			<h2
				class="text-3xl font-black text-outline leading-tight md:text-[6rem] md:leading-20 drop-shadow-2xl"
			>
				Hi, It's Me,
			</h2>
			<h1 class="text-5xl font-black text-outline md:text-[10rem] drop-shadow-2xl">ZombieNW</h1>
			<h3
				class="mt-2 text-xl font-bold text-outline leading-tight md:mt-0 md:text-[2.5rem] md:leading-4 drop-shadow-lg"
			>
				Programmer, YouTuber, and Creator of Things
			</h3>
		</div>

		<div class="mt-6 flex justify-center md:mt-0 md:h-2/3 md:flex-1">
			<img
				src="/logo.png"
				class="aspect-square h-[30vw] w-[30vw] min-h-[150px] min-w-[150px] max-h-[200px] max-w-[200px] md:h-[15vw] md:w-[15vw] md:max-h-none md:max-w-none drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
				alt="A yellow star with a blue sword with a brown hilt going through it."
			/>
		</div>
	</div>
</div>
