<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/smplrchess/smplrchess_logo.png" alt="A chess piece with the words Simpler Chess in front of it." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<div class="w-10/12 mx-auto md:pl-24 pl-4 text-2xl">
		<h1 class="pt-8 md:text-7xl text-5xl font-bold text-outline mb-4">Smplr Chess</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">About</h1>
		<h1 class="font-medium md:w-2/3">
			This game has existed for almost thousands of years and it's still so darn complicated to play it on your phone? If you want an app that's just chess, here it is! No accounts, no ads, no fuss. Open the app and start playing instantly. Adjust CPU
			difficulty, get hints (and control their difficulty), and customize themes (coming soon) with an easy-to-use menu. It's straightforward and always just chess.
		</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Screenshots</h1>
		<div class="flex flex-wrap justify-center items-center my-8">
			<img src="/assets/smplrchess/screenshot_gameplay.jpg" class="mx-auto" alt="Simpler Chess Gameplay" />
			<img src="/assets/smplrchess/screenshot_begin.jpg" class="mx-0" alt="Simpler Chess Opening Gameplay" />
			<img src="/assets/smplrchess/screenshot_opener.jpg" class="mx-auto" alt="Simpler Chess Splash Screen" />
		</div>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Usage</h1>
		<h1 class="text-xl font-medium md:w-2/3">Download the Android APK below and install. You made need to enable "Install Apps From Unknown Sources" for it to work.</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Download</h1>
		<div class="grid grid-cols-1 md:mx-72 my-8 text-shadow">
			<!-- Retro Tennis 1 -->
			<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
				<div class="w-full flex items-center justify-center h-full">
					<div class="md:w-1/2 pr-4">
						<p class="text-4xl font-bold py-2">SmplrChess v1.1</p>
						<p class="text-l pb-6">Works offline, easy to use, customizable, it's just that Smpl.</p>
						<a href="https://github.com/ZombieNW/SmplrChess/releases/download/1.1/SmplrChess_1.1.0.apk" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - APK</a>
					</div>
					<img src="./assets/smplrchess/smplrchess_banner.png" alt="Simpler Chess Banner" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
				</div>
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
