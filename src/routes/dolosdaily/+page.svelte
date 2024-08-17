<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<title>Dolos Daily - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/dolosdaily/dolosdaily_logo.png" alt="The words Dolos and Daily with a globe between them." class="znw_logo h-[20vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<div class="w-10/12 mx-auto md:pl-24 pl-4 text-2xl">
		<h1 class="pt-8 md:text-7xl text-5xl font-bold text-outline mb-4">ArchOpen</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">About</h1>
		<h1 class="md:w-2/3">The Dolos Daily is an AI powered fake news website made for educational and demonstrational purposes. It uses LLAMA-Node as well as the Unsplash API to generate articles from a given list of subjects.</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Video</h1>
		<iframe src="https://www.youtube.com/embed/0DeXNBOuRDo" class="h-96 md:w-1/2 w-full" title="A YouTube video" frameborder="0" allowfullscreen></iframe><br />

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Try It!</h1>
		<p>NOTICE: The Demo Page is NOT Designed For Mobile</p>
		<div class="flex justify-center items-center mt-12 mb-24 flex-wrap gap-4">
			<a href="/dddemo/index.html" class="px-8 mx-8 py-4 bg-[#7092e73f] border-2 border-border_t hover:border-border_t_h rounded-xl">Demo Page</a>
			<a href="https://github.com/ZombieNW/DolosDaily" class="px-8 mx-8 py-4 bg-[#7092e73f] border-2 border-border_t hover:border-border_t_h rounded-xl">Source Code</a>
		</div>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(228, 228, 228);
		background: linear-gradient(180deg, rgba(228, 228, 228, 1) 0%, rgba(191, 191, 191, 1) 100%);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
