<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import DownloadCard from '$lib/components/DownloadCard.svelte';
</script>

<svelte:head>
	<title>Retro Tennis - ZombieNW</title>
</svelte:head>

<Header />

<ProjectHero img="./assets/retro/logo.png" color="green" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Retro Tennis</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Retro Tennis (and Snake) is a series of arcade game clones made for the Nintendo Wii. During the
		pandemic, researching the Wii on a technical level was my side project that kept me sane. I can
		make no guarentees on the quality of the games, but if you'd like to play them, you can!
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Installation</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Download the games below in either HBC or WAD format. They have been tested and are functional
		on Dolphin and real hardware. To learn how to install HBC or WAD files, please look elsewhere ❤️
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Download</h2>
	<div class="md:w-2/3 mx-auto">
		<DownloadCard
			title="Retro Tennis"
			desc="Download from Github Releases"
			link="https://github.com/ZombieNW/Retro-Tennis-1/releases/latest"
			img="./assets/retro/rt1banner.png"
			color="green"
		/>
		<DownloadCard
			title="Retro Tennis 2"
			desc="Download from Github Releases"
			link="https://github.com/ZombieNW/Retro-Tennis-2/releases/latest"
			img="./assets/retro/rt2banner.png"
			color="green"
			direction="right"
		/>
		<DownloadCard
			title="Retro Tennis 3D"
			desc="Download from Github Releases"
			link="https://github.com/ZombieNW/Retro-Tennis-3D/releases/latest"
			img="./assets/retro/rt3banner.png"
			color="green"
		/>
		<DownloadCard
			title="Retro Snake"
			desc="Download from Github Releases"
			link="https://github.com/ZombieNW/Retro-Snake/releases/latest"
			img="./assets/retro/rsbanner.png"
			color="green"
			direction="right"
		/>
		<DownloadCard
			title="Retro Tennis Deluxe"
			desc="Physical release only, contact me for a digital download"
			img="./assets/retro/rtdbanner.png"
			color="green"
		/>
	</div>
</div>
