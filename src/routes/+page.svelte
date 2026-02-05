<script>
	import Hero from '$lib/components/Hero.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Hero />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Projects</h1>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<ProjectCard
			title="ArchOpen"
			description="File association manager for RetroArch on Windows. Open games simpler and faster."
			color="blue"
			img="https://github.com/ZombieNW/ArchOpen/raw/main/assets/icon.png"
			link="/archopen"
		/>
		<ProjectCard
			title="Poker Machine"
			description="Video poker cabinet software made in Godot. Play it online!"
			color="green"
			img="https://github.com/ZombieNW/PokerMachine/raw/main/icon.png"
			link="/poker"
		/>
		<ProjectCard
			title="Embedabbl"
			description="Quickly embed roms and other files into your website."
			color="purple"
			img="https://github.com/ZombieNW/Embedabbl/raw/main/static/icon.png"
			link="/embedabbl"
		/>
		<ProjectCard
			title="Dolos Daily"
			description="Proof-of-Concept AI generated fake news website."
			color="white"
			img="https://github.com/ZombieNW/DolosDaily/raw/main/static/logoWhite.png"
			link="/dolosdaily"
		/>
		<ProjectCard
			title="CalcBattles"
			description="Fast paced Battle RPG for learning Calculus."
			color="red"
			img="https://github.com/ZombieNW/CalcBattles/raw/main/static/assets/title.png"
			link="/calcbattles"
		/>
		<ProjectCard
			title="Coming Soon"
			description="The next big thing is always coming."
			color="black"
			img="project_icons/question_mark.png"
		/>
	</div>
	<h1 class="text-6xl font-bold">Videos</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<YouTubeVideo videoID="0DeXNBOuRDo" />
		<YouTubeVideo videoID="0DeXNBOuRDo" />
		<YouTubeVideo videoID="t5uUji3DW04" />
	</div>

	<h1 class="text-6xl font-bold">About Me</h1>
	<div class="w-full md:flex items-center justify-center mb-20">
		<img
			src="logo.png"
			class="w-2/3 md:w-1/3 mx-auto md:mx-0"
			alt="ZombieNW's avatar, also known as a Blob"
		/>
		<div class="md:w-1/2 md:m-0 m-4">
			<h1 class="md:text-6xl text-4xl font-extrabold text-center md:text-left">
				Hi, it's me, ZombieNW!
			</h1>
			<p class="text-2xl indent-8 mt-2">
				I'm a computer science student always working on <i>something</i>. I have tons of side
				projects and passions that I cycle between.
			</p>
		</div>
	</div>

	<div class="w-full h-12 text-center">
		Made with ❤️ by ZombieNW {new Date().getFullYear()}
	</div>
</div>
