<script>
	import Hero from '$lib/components/Hero.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import IconLinks from '$lib/components/IconLinks.svelte';
</script>

<svelte:head>
	<title>ZombieNW</title>
</svelte:head>

<Hero />

<IconLinks />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<a href="/projects" class="text-6xl font-bold">Projects</a>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-8">
		<ProjectCard
			title="ArchOpen"
			description="File association manager for RetroArch on Windows. Open games simpler and faster."
			color="blue"
			img="./assets/archopen/icon.png"
			link="/archopen"
		/>
		<ProjectCard
			title="Poker Machine"
			description="Video poker cabinet software made in Godot. Play it online!"
			color="green"
			img="./assets/poker/icon.png"
			link="/poker"
		/>
		<ProjectCard
			title="Embedabbl"
			description="Quickly embed roms and other files into your website."
			color="purple"
			img="./assets/embedabbl/icon.png"
			link="/embedabbl"
		/>
		<ProjectCard
			title="CalcBattles"
			description="Fast paced Battle RPG for learning Calculus."
			color="red"
			img="./assets/calcbattles/logo.png"
			link="/calcbattles"
		/>
		<ProjectCard
			title="TradeShop"
			description="A simple, no-nonsense item trade chest shop plugin for Minecraft."
			color="amber"
			img="./assets/tradeshop/icon.png"
			link="/tradeshop"
		/>
		<ProjectCard
			title="Chipper-M8"
			description="A user-friendly Chip-8 emulator."
			color="white"
			img="./assets/chipperm8/icon.png"
			link="/chipperm8"
		/>
	</div>
	<a
		href="/projects"
		class="flex flex-col border-2 p-4 rounded-xl hover:scale-[103%] transition-all
	duration-300 overflow-hidden bg-gray-800 border-gray-700 m-8 mb-20"
	>
		<div class="flex">
			<h1 class="text-4xl font-bold">More Projects</h1>
		</div>
		<p class="text-gray-300">See a more complete list of things I've made.</p>
	</a>

	<a href="https://youtube.com/ZombieNW" class="text-6xl font-bold">Videos</a>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<YouTubeVideo videoID="U0AWPiN0Sq8" />
		<YouTubeVideo videoID="0DeXNBOuRDo" />
		<YouTubeVideo videoID="dTg56eE8_TI" />
	</div>

	<h1 class="text-6xl font-bold">About Me</h1>
	<div class="w-full md:flex items-center justify-center">
		<div class="flex justify-center items-center md:mx-12 md:w-1/4 w-full">
			<img
				src="profile.png"
				class="w-full mx-auto md:mx-0 -rotate-5 hover:rotate-5 transition-all duration-300"
				alt="ZombieNW's avatar, also known as a Blob"
			/>
		</div>
		<div class="md:w-1/2 md:m-0 m-4">
			<h1 class="md:text-6xl text-4xl font-extrabold text-center md:text-left">
				Hi, it's me, ZombieNW!
			</h1>
			<p class="text-2xl indent-8 mt-2 text-gray-300">
				I'm a computer science student always working on <i>something</i>. I've been programming,
				making YouTube videos, and playing piano since I was about 10 years old. I still love doing
				all these things! <br /> <br />
				Contact me at
				<a
					href="mailto:zombienw@gmail.com"
					class="hover:text-blue-300 transition-colors duration-300">zombienw@gmail.com</a
				>
			</p>
		</div>
	</div>
</div>
