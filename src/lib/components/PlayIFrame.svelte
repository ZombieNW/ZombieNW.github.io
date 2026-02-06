<script>
	export let src = 'https://poker.zombienw.com';
	export let title = 'Poker Machine';

	let isPlaying = false;
	let container;

	function handlePlay() {
		isPlaying = true;
	}

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			container.requestFullscreen();
		}
	}
</script>

<div class="flex flex-col w-full" bind:this={container}>
	<div class="relative w-full bg-black aspect-video">
		{#if !isPlaying}
			<button
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 hover:bg-white rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
				on:click={handlePlay}
				aria-label="Play"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 text-gray-800">
					<path d="M8 5v14l11-7z" />
				</svg>
			</button>
		{:else}
			<iframe
				{src}
				{title}
				frameborder="0"
				allowfullscreen
				class="absolute top-0 left-0 w-full h-full pointer-events-auto"
			></iframe>
		{/if}
	</div>
	<div
		class="bg-gray-900 px-8 py-3 flex items-center justify-between rounded-xl mt-2 hover:scale-[101%] transition-all duration-300"
	>
		<h1 class="text-xl font-bold">{title}</h1>
		<div class="flex items-center gap-4">
			<button
				on:click={isPlaying ? () => (isPlaying = false) : handlePlay}
				class="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
				aria-label="Toggle fullscreen"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
					<rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="currentColor" />
				</svg>
				<span class="font-medium">Stop</span>
			</button>
			<button
				on:click={toggleFullscreen}
				class="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
				aria-label="Toggle fullscreen"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
					<path
						d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
					/>
				</svg>
				<span class="font-medium">Fullscreen</span>
			</button>
		</div>
	</div>
</div>
