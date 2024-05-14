<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';

	function popup() {
		const popupWindow = window.open('/dolosdaily/demo/index.html');
	}
</script>

<title>Dolos Daily - ZombieNW</title>

<div class="bg-bg_b_t w-full h-16 text-center flex items-center justify-center border-2 border-border_t hover:border-border_t_h_l">
	<a href="https://www.youtube.com/@ZombieNW" class="mx-32 text-3xl font-bold hover:italic">Watch <i class="fa-brands fa-youtube"></i></a>
	<a href="/" class="mx-32 text-3xl font-bold hover:italic">Home <i class="fa-solid fa-home"></i></a>
	<a href="https://store.zombienw.com/" class="mx-32 text-3xl font-bold hover:italic">Shop <i class="fa-solid fa-bag-shopping"></i></a>
</div>

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/dolosdaily/dolosdaily_logo.png" alt="The words Dolos and Daily with a globe between them." class="znw_logo h-[20vh] absolute" />
	<Space class="h-96 absolute" />
</div>

<body class="gradient-bg">
	<h1 class="pl-24 pt-8 text-7xl font-bold text-outline">The What?</h1>
	<h1 class="pl-24 text-2xl">
		<span>The Dolos Daily is an AI powered fake news website made for educational and demonstrational purposes. It uses LLAMA-Node as well as the Unsplash API to generate articles from a given list of subjects.</span><br /><br />
		<h1 class="text-3xl italic">Watch The Video</h1>
		<iframe src="https://www.youtube.com/embed/0DeXNBOuRDo" width="560" height="315" title="A YouTube video" frameborder="0" allowfullscreen></iframe><br />
		<a href="https://github.com/ZombieNW/DolosDaily" class="text-3xl italic underline">View The Source Code</a> <br /> <br />
		<a href="#." on:click={popup} class="text-3xl italic underline">View The Demo Page</a>
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
