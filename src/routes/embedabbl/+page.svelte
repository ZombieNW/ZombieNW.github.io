<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';

	function awayFL() {
		const popupWindow = window.open('https://embedabbl.zombienw.com/awayfl/index.html?swf=https://embedabbl.zombienw.com/ruffle/test.swf', 'Popup', 'width=800,height=400');
	}

	function emuJS() {
		const popupWindow = window.open('https://embedabbl.zombienw.com/emujs/index.html?rom=https://embedabbl.zombienw.com/emujs/test.nes&core=nes', 'Popup', 'width=800,height=400');
	}

	function jsDOS() {
		const popupWindow = window.open('https://embedabbl.zombienw.com/jsdos/index.html?jsdos=https://embedabbl.zombienw.com/jsdos/test.jsdos', 'Popup', 'width=800,height=400');
	}
</script>

<title>Retro Tennis - ZombieNW</title>

<div class="bg-bg_b_t w-full h-16 text-center flex items-center justify-center border-2 border-border_t hover:border-border_t_h_l">
	<a href="https://www.youtube.com/@ZombieNW" class="mx-32 text-3xl font-bold hover:italic">Watch <i class="fa-brands fa-youtube"></i></a>
	<a href="/" class="mx-32 text-3xl font-bold hover:italic">Home <i class="fa-solid fa-home"></i></a>
	<a href="https://store.zombienw.com/" class="mx-32 text-3xl font-bold hover:italic">Shop <i class="fa-solid fa-bag-shopping"></i></a>
</div>

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/embedabbl/embedabbl_logo.png" alt="A letter E with a purple outline." class="znw_logo h-[30vh] absolute" />
	<Space class="h-96 absolute" />
</div>

<body class="gradient-bg">
	<h1 class="pl-24 pt-8 text-7xl font-bold text-outline">The What?</h1>
	<h1 class="pl-24 text-2xl">
		<span>Embedabbl is an easy to use media embeding wrapper to quickly add Flash Games & Emulators to your website without having to read unearthly amounts of documentation.</span><br /><br />
		<h1 class="text-3xl italic">This is stupid.</h1>
		<span>I agree, most of these tools have their own way of embeding things into websites. I just happened to make myself a tool that makes it easier for me, and thought I'd share. Don't expect this to be a big deal, it's not.</span>
	</h1>

	<h1 class="pl-24 pt-8 text-7xl font-bold text-outline">Usage</h1>
	<h1 class="pl-24 pt-8 text-2xl text-outline">Full "documentation" is available on <a href="https://github.com/ZombieNW/Embedabbl" class="italic underline font-bold">GitHub</a>.</h1>
	<div class="flex justify-center items-center my-24">
		<a href="#." on:click={awayFL} class="px-8 mx-8 py-4 bg-[#7092e73f] border-border_t hover:border-border_t_h rounded-xl">Try AwayFL Core</a>
		<a href="#." on:click={emuJS} class="px-8 mx-8 py-4 bg-[#7092e73f] border-border_t hover:border-border_t_h rounded-xl">Try EmuJS Core</a>
		<a href="#." on:click={jsDOS} class="px-8 mx-8 py-4 bg-[#7092e73f] border-border_t hover:border-border_t_h rounded-xl">Try JSDos Core</a>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(44, 49, 76);
		background: linear-gradient(180deg, rgba(44, 49, 76, 1) 0%, rgba(16, 51, 92, 1) 100%);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
