<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
</script>

<svelte:head>
	<title>Dolos Daily - ZombieNW</title>
</svelte:head>

<Header />

<ProjectHero img="./assets/dolosdaily/logo.png" color="white" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Dolos Daily</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Dolos Daily is an AI-Powered fake news website made for educational/demonstrational purposes.
		The website was developed in SvelteKit and Node.JS. It uses LLAMA-Node to generate news articles
		and the Unsplash API to find thumbnails. The article subjects are pulled from a static list of
		topics.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Website</h2>
	<a
		href="https://dd.zombienw.com/"
		class="underline hover:text-blue-300 transition-colors duration-300">dd.zombienw.com</a
	>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Video</h2>
	<div class="w-1/3 m-4">
		<YouTubeVideo videoID="0DeXNBOuRDo" />
	</div>
</div>
