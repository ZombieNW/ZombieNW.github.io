<script>
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>ZombieNW</title>
</svelte:head>

{@render children()}
