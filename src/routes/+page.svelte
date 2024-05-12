<script>
	import Space from '../components/Space.svelte';
</script>

<title>ZombieNW</title>

<div class="h-[70vh] hero align-middle overflow-hidden">
	<Space class="h-96" />
	<div class="absolute left-24 top-1/3 -translate-y-1/2 text-left">
		<h1 class="text-7xl font-black text-outline">Hi, It's Me,</h1>
		<h1 class="text-9xl font-black text-outline">ZombieNW</h1>
		<h1 class="text-4xl leading-normal font-bold text-outline">Programmer, YouTuber, Mediocre Joke Maker</h1>
	</div>
	<img src="./assets/logo.png" alt="ZombieNW Logo - Start with a sword in it." class="znw_logo absolute right-24 top-1/3 -translate-y-1/2 w-[20vw]" />
</div>

<body class="gradient-bg">
	<div class="bg-bg_b_t w-full h-16 text-center flex items-center justify-center border-2 border-border_t hover:border-border_t_h_l">
		<a href="https://www.youtube.com/@ZombieNW" class="mx-32 text-3xl font-bold hover:italic">Watch <i class="fa-brands fa-youtube"></i></a>
		<a href="https://store.zombienw.com/" class="mx-32 text-3xl font-bold hover:italic">Shop <i class="fa-solid fa-bag-shopping"></i></a>
		<a href="/contact" class="mx-32 text-3xl font-bold hover:italic">Contact <i class="fa-solid fa-address-book"></i></a>
	</div>

	<h1 class="pl-24 pt-8 text-7xl font-bold text-outline">The Projects</h1>

	<div class="grid grid-cols-3 mx-24 my-8 text-shadow">
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#46a8394f]">
			<p class="text-4xl font-bold">Retro Tennis</p>
			<p class="-mt-3 text-l">Wii Homebrew Pong Clones</p>
			<img src="./assets/retro/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#832dd44f]">
			<p class="text-4xl font-bold">Smplr Chess</p>
			<p class="-mt-3 text-l">A decluttered chess app for Android.</p>
			<img src="./images/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#1c5a974f]">
			<p class="text-4xl font-bold">Embedabbl</p>
			<p class="-mt-3 text-l">Easy to use media wrapper.</p>
			<img src="./images/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#af21664f]">
			<p class="text-4xl font-bold">ArchOpen</p>
			<p class="-mt-3 text-l">File association manager for RetroArch on Windows.</p>
			<img src="./images/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#0000004F]">
			<p class="text-4xl font-bold">Coming Soon</p>
			<p class="-mt-3 text-l">bottom text</p>
			<img src="/images/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-64 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#32b9904F]">
			<p class="text-4xl font-bold">Project Bismuth</p>
			<p class="-mt-3 text-l">A discontinued FPS game for Windows.</p>
			<img src="./images/retrotennis_logo.png" alt="Retro Tennis Logo" class="overflow-hidden mx-auto" />
		</div>
	</div>
	<hr class="w-1/4 mx-auto" />

	<h1 class="pl-24 pt-8 text-7xl font-bold text-outline">The "Me"</h1>

	<div class="w-full flex items-center justify-center">
		<img src="/assets/index/profile.png" class="profile" alt="ZombieNW's avatar, also known as a Blob" />
		<div class="w-1/2">
			<h1 class="text-6xl font-black text-outline">Hi, it's me, ZombieNW!</h1>
			<p class="text-2xl indent-8 mt-2">
				I'm an amateur developer and YouTuber who likes Node.JS, Svelte, and Tailwind. I also have experience in other languages such as Java and GDScript. I'm always learning and working on something new. I also enjoy making YouTube videos about my
				creations and things I find interesting. Want to work together? <a href="/contact" class="italic">Contact me!</a>
			</p>
		</div>
	</div>
	<hr class="w-1/4 mx-auto" />
	<div class="w-full flex items-center justify-center my-8">
		<a href="https://discord.gg/tKFMy85"><i class="fab fa-discord fa-2x m-4 text-5xl"></i></a>
		<a href="https://youtube.com/zombienw"><i class="fab fa-youtube fa-2x m-4 text-5xl"></i></a>
		<a href="https://twitter.com/zombie_nw"><i class="fab fa-twitter fa-2x m-4 text-5xl"></i></a>
		<a href="https://www.twitch.tv/zombie_nw"><i class="fab fa-twitch fa-2x m-4 text-5xl"></i></a>
		<a href="https://github.com/ZombieNW"><i class="fab fa-github fa-2x m-4 text-5xl"></i></a>
	</div>

	<hr class="w-1/4 mx-auto" />

	<center>
		<h1 class="text-xl my-4">Can't Find Something? Try our <a href="/lost-and-found" class="italic">Lost & Found</a></h1>
	</center>

	<hr class="w-1/4 mx-auto" />

	<center>
		<h1 class="text-xl pt-6 pb-8">ZombieNW, {new Date().getFullYear()}</h1>
	</center>
</body>

<style lang="postcss">
	:global(html) {
		background-color: #121212;
		color: #ffffff;
		font-family: 'Rubik', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
	}

	.hero {
		background-image: url('/assets/index/top-container-bg.jpg');
	}

	.profile,
	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.05);
	}

	.profile:hover {
		transform: rotate(15deg);
	}
</style>
