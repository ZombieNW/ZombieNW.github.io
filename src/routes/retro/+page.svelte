<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/retro/retrotennis_logo.png" alt="ZombieNW Logo - Start with a sword in it." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The What?</h1>
	<h1 class="md:pl-24 pl-4 text-2xl font-medium md:w-2/3">
		Retro Tennis is a series of homebrew clones made for the Nintendo Wii. Learning how the Wii works and how to make apps for it was a project for me during the panedmic. If you want to try one out, <span class="italic">Play Retro Tennis 3D!</span>
		<br /> <br />
		NOTICE! Install the WADs at your own risk! I am not responsible for any bricks!
	</h1>

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The Games</h1>

	<div class="grid grid-cols-1 md:mx-72 my-8 text-shadow">
		<!-- Retro Tennis 1 -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2 pr-4">
					<p class="text-4xl font-bold py-2">Retro Tennis 1</p>
					<p class="text-l pb-6">A very basic proof of concept. This was my first attempt at getting anything to boot on the Wii so I do not recommend playing this.</p>
					<div class="flex flex-wrap gap-4">
						<a href="https://github.com/ZombieNW/Retro-Tennis-1/releases/download/1.0/Retro_Tennis_1_Homebrew_Channel.zip" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - HBC</a>
					</div>
				</div>
				<img src="./assets/retro/rt1banner.png" alt="Retro Tennis 1 Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
		</div>
		<!-- Retro Tennis 2 -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<img src="./assets/retro/rt2banner.png" alt="Retro Tennis 2 Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
				<div class="md:w-1/2 pl-4">
					<p class="text-4xl font-bold py-2">Retro Tennis 2</p>
					<p class="text-l pb-6">A suprisingly good pong clone? This was my redepmtion attempt at making Retro Tennis.</p>
					<div class="flex flex-wrap gap-4">
						<a href="https://github.com/ZombieNW/Retro-Tennis-2/releases/download/1.0/Retro.Tennis.2.Homebrew.Channel.zip" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - HBC</a>
						<a href="https://github.com/ZombieNW/Retro-Tennis-2/releases/download/1.0/Retro.Tennis.2.RR2E.wad" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - WAD</a>
					</div>
				</div>
			</div>
		</div>
		<!-- Retro Tennis 3D -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2 pr-4">
					<p class="text-4xl font-bold py-2">Retro Tennis 3D</p>
					<p class="text-l pb-6">A 3D pong game with uneccesary effort put into it. A surprisingly fun way to kill 10 minutes. Can you find the secret ending?</p>
					<div class="flex flex-wrap gap-4">
						<a href="https://github.com/ZombieNW/Retro-Tennis-3D/releases/download/1.0/Retro_Tennis_3D_RR3E_Wii_Channel.wad" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - HBC</a>
						<a href="https://github.com/ZombieNW/Retro-Tennis-3D/releases/download/1.0/Retro_Tennis_3D_RR3E_Wii_Channel.wad" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - WAD</a>
					</div>
				</div>
				<img src="./assets/retro/rt3banner.png" alt="Retro Tennis 3D Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
		</div>
		<!-- Retro Tennis Deluxe -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<img src="./assets/retro/rtdbanner.png" alt="Retro Tennis Deluxe Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
				<div class="md:w-1/2 pl-4">
					<p class="text-4xl font-bold py-2">Retro Tennis Deluxe</p>
					<p class="text-l pb-6">A compilation of all the Retro Tennis Wii Games. Had a limited physical release. No download available currently. If anyone cares I'll put one up.</p>
				</div>
			</div>
		</div>
		<!-- Retro Snake -->
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2 pr-4">
					<p class="text-4xl font-bold py-2">Retro Snake</p>
					<p class="text-l pb-6">A classy snake clone for the Wii with nice presentation.</p>
					<div class="flex flex-wrap gap-4">
						<a href="https://github.com/ZombieNW/Retro-Snake/releases/download/1.0/Retro_Snake_Homebrew_Channel.zip" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - HBC</a>
						<a href="https://github.com/ZombieNW/Retro-Snake/releases/download/1.0/Retro_Snake_RRSE_Wii_Channel.wad" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - WAD</a>
					</div>
				</div>
				<img src="./assets/retro/rsbanner.png" alt="Retro Snake Logo" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
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

	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.01);
	}
</style>
