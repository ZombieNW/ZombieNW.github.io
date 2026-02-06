<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
</script>

<svelte:head>
	<title>CalcBattles - ZombieNW</title>
</svelte:head>

<Header />

<ProjectHero img="./assets/calcbattles/logo.png" color="red" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">CalcBattles</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		CalcBattles is a fast-paced battle RPG for learning Calculus. Players fight monsters through
		levels by answering flash cards. The game was made for a regional app development competition.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Download</h2>
	<p class="text-gray-300">Android Only</p>
	<a
		href="https://github.com/ZombieNW/CalcBattles/releases"
		class="underline hover:text-blue-300 transition-colors duration-300">Github Releases</a
	>
</div>
