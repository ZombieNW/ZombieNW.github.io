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
			title="Project 1"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
			color="green"
		/>
		<ProjectCard
			title="Project 1"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
			color="red"
		/>
		<ProjectCard
			title="Project 1"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
			color="blue"
		/>
	</div>
	<h1 class="text-6xl font-bold">Videos</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-8 mb-20">
		<YouTubeVideo videoID="M7lc1UVf-VE" />
		<YouTubeVideo videoID="M7lc1UVf-VE" />
		<YouTubeVideo videoID="M7lc1UVf-VE" />
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
