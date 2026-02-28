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

<meta property="og:title" content="ZombieNW | zombienw.com" />
<meta
	property="og:description"
	content="Hi! It's me! ZombieNW. I'm a computer science student always working on something."
/> <meta property="og:type" content="website" />
<meta property="og:url" content="https://zombienw.com" />
<meta property="og:image" content="https://zombienw.com/banner.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="ZombieNW | zombienw.com" />
<meta
	name="twitter:description"
	content="Hi! It's me! ZombieNW. I'm a computer science student always working on something."
/> <meta name="twitter:image" content="https://zombienw.com/banner.png" />

<meta name="theme-color" content="#030712" />
