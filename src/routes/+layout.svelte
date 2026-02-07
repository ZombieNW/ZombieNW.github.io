<script>
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>ZombieNW</title>
	<base target="_blank" />
</svelte:head>

{@render children()}

<div class="w-full h-12 text-center mt-8 z-20 relative">
	Made with ❤️ by ZombieNW {new Date().getFullYear()}
</div>
