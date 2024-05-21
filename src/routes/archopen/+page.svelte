<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/archopen/archopen_logo.png" alt="The words Arch and Open with an arch going between the two words." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The What?</h1>
	<h1 class="md:pl-24 pl-4 text-2xl font-medium">
		Easily set up file associations for your rom collection. For those who don't like frontends or just want to easily open a rom sent to them. <br /> <br />
		Usage: <br />
		Grab the latest release below, and generate a config by running "archopen.exe --generateconfig". <br /> Customize your config to your liking so each extension cooresponds with a core of your chosing. <br />
		Then just set the file type to always open with archopen.exe
	</h1>

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The Download</h1>

	<div class="grid grid-cols-1 md:mx-72 my-8 text-shadow">
		<div class="flex project-card flex-col items-start gap-3 p-5 m-6 z-1 h-96 shadow-lg border-2 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2 pr-4">
					<p class="text-4xl font-bold py-2">ArchOpen v0.5</p>
					<p class="text-l pb-6">An easier way to open games with RetroArch on Windows.</p>
					<a href="https://github.com/ZombieNW/ArchOpen/releases" class="px-8 py-4 bg-bg_t border-2 border-border_t hover:border-border_t_h rounded-xl">Download - Windows</a>
				</div>
				<img src="/assets/archopen/gif.gif" alt="Arch Open Banner" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
		</div>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(116, 35, 70);
		background: linear-gradient(180deg, rgba(116, 35, 70, 1) 0%, rgba(69, 23, 65, 1) 100%);
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
