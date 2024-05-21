<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<div class="bg-bg_b_t w-full h-16 text-center flex items-center justify-center">
	<a href="https://www.youtube.com/@ZombieNW" class="md:mx-32 mx-2 text-3xl font-bold hover:italic">Watch <i class="fa-brands fa-youtube md:inline hidden"></i></a>
	<a href="/" class="md:mx-32 mx-2 text-3xl font-bold hover:italic">Home <i class="fa-solid fa-home md:inline hidden"></i></a>
	<a href="https://store.zombienw.com/" class="md:mx-32 mx-2 text-3xl font-bold hover:italic">Shop <i class="fa-solid fa-bag-shopping md:inline hidden"></i></a>
</div>

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/smplrchess/smplrchess_logo.png" alt="A chess piece with the words Simpler Chess in front of it." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The What?</h1>
	<h1 class="md:pl-24 pl-4 text-2xl font-medium">
		A Smplr way to play Chess. <br /> A problem that's plagued me for too long is that Chess apps are way too complicated. This game has existed for almost thousands of years and it's still so damn complicated to play it on your phone? If you want an app that's
		just chess, here it is! You open the app and you're greeted right away by chess. No making an account, no ads, no tomfoolery, it's just chess. This doesn't mean it doesn't have features. Want to change the CPU difficulty? Want hints? Want to control the
		difficulty of the hints? Want to change theme? (Coming Soon.) There's an easy to use menu for it! This app will never not be chess.
	</h1>

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The Screenshots</h1>

	<div class="flex flex-wrap justify-center items-center my-8">
		<img src="/assets/smplrchess/screenshot_gameplay.jpg" class="mx-auto" alt="Simpler Chess Gameplay" />
		<img src="/assets/smplrchess/screenshot_begin.jpg" class="mx-0" alt="Simpler Chess Opening Gameplay" />
		<img src="/assets/smplrchess/screenshot_opener.jpg" class="mx-auto" alt="Simpler Chess Splash Screen" />
	</div>

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The Download</h1>

	<div class="grid grid-cols-1 md:mx-72 my-8 text-shadow">
		<!-- Retro Tennis 1 -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2 pr-4">
					<p class="text-4xl font-bold py-2">SmplrChess v1.1</p>
					<p class="text-l pb-6">Works offline, easy to use, customizable, it's just that Smpl.</p>
					<a href="https://github.com/ZombieNW/SmplrChess/releases/download/1.1/SmplrChess_1.1.0.apk" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - Android APK</a>
				</div>
				<img src="./assets/smplrchess/smplrchess_banner.png" alt="Simpler Chess Banner" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
		</div>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(126, 58, 190);
		background: linear-gradient(180deg, rgba(126, 58, 190, 1) 0%, rgba(77, 61, 135, 1) 100%);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.01);
	}
</style>
