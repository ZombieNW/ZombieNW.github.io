<script>
	import Space from '../../components/Space.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import DownloadCard from '../../components/DownloadCard.svelte';
</script>

<title>Retro Tennis - ZombieNW</title>

<Header />

<div class="h-[50vh] hero align-middle overflow-hidden flex justify-center items-center">
	<img src="/assets/archopen/archopen_logo.png" alt="The words Arch and Open with an arch going between the two words." class="znw_logo h-[30vh] absolute" />
	<Space class="h-full" />
</div>

<body class="gradient-bg">
	<div class="w-10/12 mx-auto md:pl-24 pl-4 text-2xl">
		<h1 class="pt-8 md:text-7xl text-5xl font-bold text-outline mb-4">ArchOpen</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">About</h1>
		<h1 class="font-medium md:w-2/3">Complicated emulation front-ends got you down? We've got you covered. No need for complicated frontends—just quickly open ROMs.</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Usage</h1>
		<h1 class="font-medium md:w-2/3">
			<ul class="list-disc mx-6">
				<li>Download the latest release below.</li>
				<li>Run 'archopen.exe --generateconfig' to create a config file.</li>
				<li>Customize the config so each file extension matches your preferred core.</li>
				<li>Set the file type to always open with 'archopen.exe'</li>
			</ul>
		</h1>

		<h1 class="pt-8 md:text-5xl text-4xl font-bold text-outline underline mb-2">Download</h1>
		<DownloadCard direction={'left'} title={'ArchOpen v0.5'} desc={'An easier way to open games with RetroArch on Windows.'} link={'https://github.com/ZombieNW/ArchOpen/releases'} img={'/assets/archopen/gif.gif'} downloadtext={'Download - GitHub'} />
	</div>
	<Footer />
</body>

<style lang="postcss">
	.hero {
		background: rgb(116, 35, 70);
		background: linear-gradient(180deg, rgba(116, 35, 70, 1) 0%, rgba(69, 23, 65, 1) 100%);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.project-card {
		transition: transform 0.5s ease;
	}

	.project-card:hover {
		transform: scale(1.01);
	}
</style>
