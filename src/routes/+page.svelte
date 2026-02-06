<script>
	import Hero from '$lib/components/Hero.svelte';
	import YouTubeVideo from '$lib/components/YouTubeVideo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import IconLinks from '$lib/components/IconLinks.svelte';
</script>

<Hero />

<IconLinks />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">Projects</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
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
			title="More on Github"
			description="Find older or unfinished projects on my GitHub profile."
			color="black"
			img="https://img.icons8.com/ios11/512/FFFFFF/github.png"
			link="https://github.com/ZombieNW"
		/>
	</div>
	<h1 class="text-6xl font-bold">Videos</h1>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<YouTubeVideo videoID="0DeXNBOuRDo" />
		<YouTubeVideo videoID="0DeXNBOuRDo" />
		<YouTubeVideo videoID="t5uUji3DW04" />
	</div>

	<h1 class="text-6xl font-bold">About Me</h1>
	<div class="w-full md:flex items-center justify-center my-12">
		<div class="flex justify-center items-center w-1/2">
			<img
				src="logo.png"
				class="w-2/3 md:w-1/3 mx-auto md:mx-0"
				alt="ZombieNW's avatar, also known as a Blob"
			/>
		</div>
		<div class="md:w-1/2 md:m-0 m-4">
			<h1 class="md:text-6xl text-4xl font-extrabold text-center md:text-left">
				Hi, it's me, ZombieNW!
			</h1>
			<p class="text-2xl indent-8 mt-2">
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
