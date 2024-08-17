<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import DownloadCard from '../../components/DownloadCard.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/retro/retrotennis_logo.png" alt="ZombieNW Logo - Start with a sword in it." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<div class="w-10/12 mx-auto md:pl-24 pl-4 text-2xl">
		<h1 class="pt-8 md:text-7xl text-5xl font-bold text-outline mb-4">Retro Tennis</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">About</h1>
		<h1 class="text-2xl font-medium md:w-2/3">
			Retro Tennis is a series of homebrew arcade clones made for the Nintendo Wii. Learning how the Wii works and how to make apps for it was a project for me during the panedmic. If you want to try one out, <span class="italic"
				>Play Retro Tennis 3D!
			</span>
		</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Usage</h1>
		<h1 class="text-2xl font-medium md:w-2/3">Download either a homebrew channel application folder or WAD channel to install. <br /> <br />NOTICE! Install the WADs at your own risk! I am not responsible for any bricks!</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Download</h1>
		<div class="grid grid-cols-1 md:mx-48 my-8 text-shadow">
			<!-- Retro Tennis 1 -->
			<DownloadCard
				direction={'left'}
				title={'Retro Tennis 1'}
				desc={'A very basic proof of concept. This was my first attempt at getting anything to boot on the Wii so I do not recommend playing this.'}
				link={'https://github.com/ZombieNW/Retro-Tennis-1/releases'}
				img={'./assets/retro/rt1banner.png'}
				downloadtext={'Download - GitHub'}
			/>
			<!-- Retro Tennis 2 -->
			<DownloadCard
				direction={'right'}
				title={'Retro Tennis 2'}
				desc={'A suprisingly good pong clone? This was my redepmtion attempt at making Retro Tennis.'}
				link={'https://github.com/ZombieNW/Retro-Tennis-2/releases'}
				img={'./assets/retro/rt2banner.png'}
				downloadtext={'Download - GitHub'}
			/>
			<!-- Retro Tennis 3D -->
			<DownloadCard
				direction={'left'}
				title={'Retro Tennis 3D'}
				desc={'A 3D pong game with uneccesary effort put into it. A surprisingly fun way to kill 10 minutes. Can you find the secret ending?'}
				link={'https://github.com/ZombieNW/Retro-Tennis-3D/releases'}
				img={'./assets/retro/rt3banner.png'}
				downloadtext={'Download - GitHub'}
			/>
			<!-- Retro Tennis Deluxe -->
			<DownloadCard
				direction={'right'}
				title={'Retro Tennis Deluxe'}
				desc={"A compilation of all the Retro Tennis Wii Games. Had a limited physical release. No download available currently. If anyone cares I'll put one up."}
				link={''}
				img={'./assets/retro/rtdbanner.png'}
				downloadtext={'Download - GitHub'}
			/>
			<!-- Retro Snake -->
			<DownloadCard
				direction={'left'}
				title={'Retro Snake'}
				desc={'A classy snake clone for the Wii with nice presentation.'}
				link={'https://github.com/ZombieNW/Retro-Snake/releases'}
				img={'./assets/retro/rsbanner.png'}
				downloadtext={'Download - GitHub'}
			/>
		</div>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(58, 111, 58);
		background: linear-gradient(180deg, rgba(58, 111, 58, 1) 0%, rgba(49, 90, 37, 1) 100%);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
