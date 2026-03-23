<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
	import DownloadCard from '$lib/components/DownloadCard.svelte';
</script>

<svelte:head>
	<title>SmplrChess - ZombieNW</title>
	<meta property="og:title" content="SmplrChess | ZombieNW" />
	<meta property="og:description" content="An incredibly simple chess app for Android." />
</svelte:head>

<Header />

<ProjectHero img="./assets/smplrchess/logo.png" color="purple" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">SmplrChess</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Chess has existed for over 1500 years. My past hubris damned me to create a chess app to battle
		my trivial woes with other chess apps. Below is the result. I hope you like it. <br /> <br />
		I may or may not plan on remaking it.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Screenshots</h2>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<img src="./assets/smplrchess/1.jpg" alt="SmplrChess's first screenshot" class="mx-auto" />
		<img src="./assets/smplrchess/2.jpg" alt="SmplrChess's second screenshot" class="mx-auto" />
		<img src="./assets/smplrchess/3.jpg" alt="SmplrChess's third screenshot" class="mx-auto" />
	</div>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Download</h2>
	<div class="md:w-2/3 mx-auto">
		<DownloadCard
			title="SmplrChess"
			desc="Download from Github Releases - Android Only"
			link="https://github.com/ZombieNW/SmplrChess/releases/latest"
			img="./assets/smplrchess/logo.png"
			color="purple"
		/>
	</div>
</div>
