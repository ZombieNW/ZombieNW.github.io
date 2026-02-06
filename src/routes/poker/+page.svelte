<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import PlayIFrame from '$lib/components/PlayIFrame.svelte';

	import Device from 'svelte-device-info';
</script>

<Header />

<ProjectHero img="https://github.com/ZombieNW/PokerMachine/raw/main/icon.png" color="green" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Poker Machine</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		In February 2025, I bought a broken, decomissioned video poker machine from a yard sale. After
		trying to take the preservationist approach, many of the parts were deemed unusable. So, new
		hardware and software was my answer. The result is Poker Machine, a video poker cabinet software
		made in Godot. <strike
			>An embedded operating system version exists based on Debian 13 via the guide below.</strike
		>
	</p>

	{#if Device.isMobile}
		<div class="text-center mt-6">
			<p class="text-lg">Sorry, this game is not available on mobile.</p>
		</div>
	{:else}
		<div class="mt-6 mb-2">
			<a
				href="https://poker.zombienw.com"
				class="text-3xl font-bold text-gray-100 hover:text-blue-300 transition-colors duration-300"
				>Play Online</a
			>
		</div>
		<div class="w-1/2 mx-auto">
			<PlayIFrame />
			<h1 class="mt-4 text-2xl font-bold">Controls</h1>
			<ul class="list-disc list-inside text-lg md:w-2/3 text-gray-300">
				<li>1, 2, 3, 4, 5 - Hold Cards</li>
				<li>Space - Play</li>
				<li>Enter - Play (Alternate)</li>
				<li>C - Add Credit</li>
				<li>B - Change Bet</li>
				<li>S - Select Game</li>
			</ul>
		</div>
	{/if}

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Credits</h2>
	<p class="text-lg md:w-2/3 text-gray-300 flex flex-col">
		<a
			href="https://opengameart.org/content/pixel-art-slot-machine"
			class="hover:text-blue-300 transition-colors duration-300"
			>Slot Machine Symbols by Vircon32; CC BY 4.0</a
		>
		<a
			href="https://kenney.nl/assets/playing-cards-pack"
			class="hover:text-blue-300 transition-colors duration-300"
			>Playing Card Textures by Kenney; CC0</a
		>
		<a
			href="https://github.com/ZombieNW/PokerMachine"
			class="hover:text-blue-300 transition-colors duration-300"
			>Soundtrack by ZombieNW; CC BY 4.0</a
		>
		<a
			href="https://github.com/ZombieNW/PokerMachine"
			class="hover:text-blue-300 transition-colors duration-300 mt-2"
			>Additional Textures & Programming by ZombieNW</a
		>
	</p>
</div>
