<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import DownloadCard from '../../components/DownloadCard.svelte';
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
		<DownloadCard
			direction={'left'}
			title={'SmplrChess v1.1'}
			desc={"Works offline, easy to use, customizable, it's just that Smpl."}
			link={'https://github.com/ZombieNW/SmplrChess/releases/'}
			img={'./assets/smplrchess/smplrchess_banner.png'}
			downloadtext={'Download - GitHub'}
		/>
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
</style>
