<script>
	import Space from '../components/Space.svelte';
	import Footer from '../components/Footer.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<title>ZombieNW</title>

<div class="h-[70vh] hero align-middle overflow-hidden">
	<Space class="h-full" />
	<div class="absolute md:left-24 md:top-1/3 top-1/4 -translate-y-1/2 md:text-left text-center w-full">
		<h1 class="md:text-[6rem] text-3xl font-black text-outline">Hi, It's Me,</h1>
		<h1 class="md:text-[10rem] text-5xl leading-tight font-black text-outline">ZombieNW</h1>
		<h1 class="md:text-[2.5rem] text-2xl leading-4 font-bold text-outline">Programmer, YouTuber, Mediocre Joke Maker</h1>
	</div>
	<img src="./assets/logo.png" alt="ZombieNW Logo - Start with a sword in it." class="znw_logo absolute md:right-24 top-1/3 md:-translate-y-1/2 md:translate-x-0 -translate-x-1/2 md:left-auto left-1/2 md:w-[20vw] w-[20vh]" />
</div>

<body class="gradient-bg">
	<div class="bg-bg_b_t w-full h-16 text-center flex items-center justify-center">
		<a href="https://www.youtube.com/@ZombieNW" class="md:mx-32 mx-2 text-3xl font-bold hover:underline">Watch <i class="fa-brands fa-youtube md:inline hidden"></i></a>
		<a href="/contact" class="md:mx-32 mx-2 text-3xl font-bold hover:underline">Contact <i class="fa-solid fa-address-book md:inline hidden"></i></a>
		<a href="https://store.zombienw.com/" class="md:mx-32 mx-2 text-3xl font-bold hover:underline">Shop <i class="fa-solid fa-bag-shopping md:inline hidden"></i></a>
	</div>

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The Projects</h1>

	<div class="grid md:grid-cols-3 grid-cols-1 md:mx-24 my-8 text-shadow">
		<ProjectCard link="/retro" title="Retro Tennis" desc="Wii Homebrew Pong Clones" img="./assets/retro/retrotennis_logo.png" color="46a8394f" />
		<ProjectCard link="/smplrchess" title="Smplr Chess" desc="A decluttered chess app for Android" img="./assets/smplrchess/smplrchess_logo.png" color="832dd44f" />
		<ProjectCard link="/embedabbl" title="Embedabbl" desc="Easy to use media wrapper" img="./assets/embedabbl/embedabbl_logo.png" color="1c5a974f" />
		<ProjectCard link="/archopen" title="ArchOpen" desc="File association manager for RetroArch on Windows" img="./assets/archopen/archopen_logo.png" color="af21664f" />
		<ProjectCard link="/dolosdaily" title="The Dolos Daily" desc="An AI powered fake news website" img="./assets/dolosdaily/dolosdaily_logo.png" color="FFFFFF4F" />
		<ProjectCard link="#" title="Coming Soon" desc="The next big thing is always coming." img="./assets/index/comingsoon_logo.png" color="0000004F" />
	</div>
	<hr class="w-1/4 mx-auto" />

	<h1 class="md:pl-24 pl-4 pt-8 md:text-7xl text-5xl font-bold text-outline">The "Me"</h1>

	<div class="w-full md:flex items-center justify-center">
		<img src="/assets/index/profile.png" class="profile w-2/3 md:w-auto mx-auto md:mx-0" alt="ZombieNW's avatar, also known as a Blob" />
		<div class="md:w-1/2 md:m-0 m-4">
			<h1 class="md:text-6xl text-4xl font-black text-outline">Hi, it's me, ZombieNW!</h1>
			<p class="text-2xl indent-8 mt-2">
				I'm an amateur developer and YouTuber who likes Node.JS, Svelte, and Tailwind. I also have experience in other languages such as Java and GDScript. I'm always learning and working on something new. I also enjoy making YouTube videos about my
				creations and things I find interesting. Want to work together? <a href="/contact" class="italic">Contact me!</a>
			</p>
		</div>
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background-image: url('/assets/index/top-container-bg.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.profile {
		transition: transform 0.5s ease;
	}

	.profile:hover {
		transform: rotate(15deg);
	}
</style>
