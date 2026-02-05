<script>
	import Space from '$lib/components/Space.svelte';
</script>

<div class="h-[70vh] bg-linear-to-b from-purple-900 to-gray-950">
	<div class="w-full h-full flex md:flex-row flex-col md:mx-12 items-center justify-center">
		<div class="md:text-left text-center md:h-2/3">
			<h2 class="md:text-[6rem] text-3xl font-black text-outline leading-20">Hi, It's Me,</h2>
			<h1 class="md:text-[10rem] text-5xl font-black text-outline">ZombieNW</h1>
			<h3 class="md:text-[2.5rem] text-2xl leading-4 font-bold text-outline">
				Programmer, YouTuber, Mediocre Joke Maker
			</h3>
		</div>
		<div class="flex justify-center md:flex-1 md:h-2/3">
			<img
				src="/logo.png"
				class="aspect-square w-[15vw] h-[15vw]"
				alt="A yellow star with a blue sword with a brown hilt going through it."
			/>
		</div>
	</div>
	<Space backgroundColor="#000033" class="inset-0 -translate-y-full" />
	<div class="bg-linear-to-b from-transparent to-gray-950 h-1/2 -translate-y-[300%]"></div>
</div>
