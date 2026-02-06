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
		<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Play Online</h2>
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
</div>
