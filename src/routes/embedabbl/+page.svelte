<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Embedabbl - ZombieNW</title>
</svelte:head>

<Header />

<ProjectHero title="Embedabbl" img="./assets/embedabbl/icon.png" color="purple" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Embedabbl</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Embedabbl is an easy to use interactive media embeding wrapper made to quickly add Flash Games &
		Emulators to your website without the need for heavy documentation. Just change a few URL
		parameters and slap it in an iFrame. <br /> <br />
		"This is Stupid." <br />
		I guess it is. Most of these tools have their own way to embed things. But I made a tool that makes
		things easier for myself, and I shared it.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Website</h2>
	<Button href="https://embedabbl.zombienw.com/" text="Embedabbl Website" color="purple" />
</div>
