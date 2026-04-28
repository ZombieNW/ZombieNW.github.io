<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<div class="mx-4 md:mx-12 overflow-y-hidden mt-20">
	<h1 class="text-6xl font-bold">Projects</h1>
	<p class="text-lg md:w-2/3 text-gray-300">A more complete list of things I've made.</p>
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
			color="blue"
			img="./assets/tradeshop/icon.png"
			link="/tradeshop"
		/>
		<ProjectCard
			title="Dolos Daily"
			description="Proof-of-Concept AI generated fake news website."
			color="white"
			img="./assets/dolosdaily/logo.png"
			link="/dolosdaily"
		/>
		<ProjectCard
			title="SmplrChess"
			description="A simple chess app for Android."
			color="purple"
			img="./assets/smplrchess/logo.png"
			link="/smplrchess"
		/>
		<ProjectCard
			title="Retro Tennis"
			description="Wii Homebrew Games made with DevKitPro and GRRLIB."
			color="green"
			img="./assets/retro/logo.png"
			link="/retro"
		/>
		<ProjectCard
			title="Chipper-M8"
			description="A user-friendly Chip-8 emulator."
			color="white"
			img="./assets/chipperm8/icon.png"
			link="/chipperm8"
		/>
		<ProjectCard
			title="More on Github"
			description="Find older or unfinished projects on my GitHub profile."
			color="black"
			img="https://img.icons8.com/ios11/512/FFFFFF/github.png"
			link="https://github.com/ZombieNW"
		/>
	</div>
</div>
