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
	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The What?</h1>
	<h1 class="md:pl-24 pl-4 text-2xl">
		<span>The Dolos Daily is an AI powered fake news website made for educational and demonstrational purposes. It uses LLAMA-Node as well as the Unsplash API to generate articles from a given list of subjects.</span><br /><br />
		<h1 class="text-3xl italic">Watch The Video</h1>
		<iframe src="https://www.youtube.com/embed/0DeXNBOuRDo" class="h-96 md:w-1/3 w-full" title="A YouTube video" frameborder="0" allowfullscreen></iframe><br />
		<a href="https://github.com/ZombieNW/DolosDaily" class="text-3xl italic underline">View The Source Code</a> <br /> <br />
		<a href="/dddemo/index.html" class="text-3xl italic underline">View The Demo Page</a>
		<p>NOTICE: The Demo Page is NOT Designed For Mobile</p>
		<br />
	</h1>
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
