<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import DownloadCard from '$lib/components/DownloadCard.svelte';
</script>

<svelte:head>
	<title>Chipper-M8 - ZombieNW</title>
	<meta property="og:title" content="Chipper-M8 | ZombieNW" />
	<meta property="og:description" content="A user friendly Chip-8 emulator for Windows." />
</svelte:head>

<Header />

<ProjectHero title="Chipper-M8" img="./assets/chipperm8/icon.png" color="white" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Chipper-M8</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Chipper-M8 is a user-friendly Chip-8 "emulator". I wrote this as an exercise for emulator
		development. Additionally, some hobby chip-8 emulators are CLI launch only, so with this one I
		tried adding a friendly interface. <br /> <br />Chip-8 is a "language"/"fantasy console" from
		the 1970's. It uses little memory and is designed to be architectually simple. There are no real
		"killer" titles, though it is very neat!
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Setup Instructions</h2>
	<ul class="list-disc list-inside text-lg md:w-2/3 text-gray-300">
		<li>Download Chipper-M8 below.</li>
		<li>Open Chipper-M8 executable.</li>
		<li>File > Open ROM</li>
		<li>Select a game and enjoy :D</li>
	</ul>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Download</h2>
	<div class="md:w-2/3 mx-auto">
		<DownloadCard
			title="Chipper-M8"
			desc="Download from Github Releases"
			link="https://github.com/ZombieNW/chipperm8/releases/latest"
			img="./assets/chipperm8/screenshot.png"
			color="white"
		/>
	</div>
</div>
