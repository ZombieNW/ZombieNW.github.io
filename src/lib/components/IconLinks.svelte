<script>
	import Fa from 'svelte-fa';
	import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<div
	class="w-full flex items-center justify-center gap-8 md:gap-24 my-2 text-5xl -mb-10 relative -top-20 z-10"
>
	<a
		href="https://store.zombienw.com"
		class="hover:scale-105 transition-all duration-300 hover:text-emerald-400 hover:drop-shadow-lg"
	>
		<Fa icon={faShoppingBag} />
	</a>
	<a
		href="https://youtube.com/c/ZombieNW"
		class="hover:scale-105 transition-all duration-300 hover:text-rose-500 hover:drop-shadow-lg"
	>
		<Fa icon={faYoutube} />
	</a>
	<a
		href="https://github.com/ZombieNW"
		class="hover:scale-105 transition-all duration-300 hover:text-gray-200 hover:drop-shadow-lg"
	>
		<Fa icon={faGithub} />
	</a>
	<a
		href="https://discord.gg/tKFMy85"
		class="hover:scale-105 transition-all duration-300 hover:text-indigo-400 hover:drop-shadow-lg"
	>
		<Fa icon={faDiscord} />
	</a>
</div>
