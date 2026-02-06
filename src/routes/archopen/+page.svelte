<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
</script>

<ProjectHero
	title="ArchOpen"
	img="https://github.com/ZombieNW/ArchOpen/raw/main/assets/icon.png"
	color="blue"
/>

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">ArchOpen</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		Has this ever happened to you? You want to open a rom from file explorer, but emulators want a
		bajillion cli parameters? Well, ArchOpen is here for you! It's a simple program that allows you
		to open roms from file explorer by mapping a list of rom file extensions to their respective
		emulator cores.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Setup Instructions</h2>
	<ul class="list-disc list-inside text-lg md:w-2/3 text-gray-300">
		<li>Download ArchOpen below.</li>
		<li>Extract the zip file.</li>
		<li class="md:indent-8 indent-4">Put the program in a safe place.</li>
		<li>
			Create a config file with <code>archopen.exe --generate-config</code>.
		</li>
		<li>Customize the config file to your liking.</li>
		<li>Right click a rom file on your computer from explorer.</li>
		<li>Select "Open with" and then "Choose another app".</li>
		<li>
			Navigate to the directory where you extracted the zip file and select <code>archopen.exe</code
			>.
		</li>
		<li>Click "OK" to save the file association.</li>
	</ul>
</div>
