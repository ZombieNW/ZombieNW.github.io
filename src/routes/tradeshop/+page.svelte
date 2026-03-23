<script>
	import ProjectHero from '$lib/components/ProjectHero.svelte';
	import Header from '$lib/components/Header.svelte';
	import DownloadCard from '$lib/components/DownloadCard.svelte';
</script>

<svelte:head>
	<title>TradeShop - ZombieNW</title>
</svelte:head>

<Header />

<ProjectHero title="TradeShop" img="./assets/tradeshop/icon.png" color="blue" />

<div class="mx-4 md:mx-12 overflow-y-hidden">
	<h1 class="text-6xl font-bold">TradeShop</h1>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">About</h2>
	<p class="text-lg md:w-2/3 text-gray-300">
		I am the "Forever DM" of Minecraft Server Admins. I've been server admin-ing for like 8 years.
		Time and time again I've had to update someone else's mod or plugin because players want to play
		on a specific version of the game. This time, I've decided to take matters into my own hadns by
		making the plugin myself. This way, I can update it when the new version comes out and it looks
		like responsibility.
	</p>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Setup Instructions</h2>
	<ul class="list-disc list-inside text-lg md:w-2/3 text-gray-300">
		<li>Download TradeShop for your server version.</li>
		<li>Put .jar in /plugins folder.</li>
		<li>Restart server.</li>
		<li>Place sign on a container block (chest, barrel, shulker, etc).</li>
		<li>
			Type out following format <br />
			<pre class="w-1/4"><code class="text-center"
					>[Shop] <br />X ItemName <br />for <br />Y ItemName</code
				></pre>
		</li>
		<li>
			Note! ItemName must be a valid <a
				href="https://jd.papermc.io/paper/1.21.1/org/bukkit/Material.html">Bukkit Material.</a
			> Case/Space doesn't matter.
		</li>
		<li>If successful, the sign will reformat itself.</li>
		<li>Right click the sign to trade !</li>
	</ul>

	<h2 class="text-3xl font-bold mt-6 mb-2 text-gray-100">Download</h2>
	<div class="md:w-2/3 mx-auto">
		<DownloadCard
			title="TradeShop"
			desc="Download from Modrinth"
			link="https://modrinth.com/plugin/znw-tradeshop"
			img="./assets/tradeshop/icon.png"
			color="blue"
		/>
	</div>
</div>
