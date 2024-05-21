<script>
	import Space from '../../components/Space.svelte';
</script>

<div class="align-middle overflow-hidden">
	<Space class="h-full absolute" />
	<div class="absolute flex w-full h-full items-center justify-center">
		<div class="md:w-1/2 flex project-card md:mx-auto flex-col items-start gap-3 z-1 md:h-96 h-1/2 shadow-lg mx-6 my-auto border-2 p-6 border-border_t hover:border-border_t_h rounded-xl bg-[#3F3F3F4F]">
			<div class="w-full flex items-center justify-center h-full">
				<div class="md:w-1/2">
					<img src="/assets/logo.png" alt="Star with sword in it" class="mx-auto h-32 my-auto block md:hidden" />
					<a href="/" class="text-4xl font-bold py-2 underline">ZombieNW</a>
					<p class="text-l pb-6">I'm an amateur developer and YouTuber who likes learning, coding, and making new things. Get in touch with me on any of the platforms below.</p>
					<div class="w-auto flex items-center justify-center">
						<a href="https://discord.gg/tKFMy85"><i class="fab fa-discord fa-2x m-4 md:text-5xl text-4xl hover:text-blue-300 transition-all"></i></a>
						<a href="https://youtube.com/zombienw"><i class="fab fa-youtube fa-2x m-4 md:text-5xl text-4xl hover:text-red-300"></i></a>
						<a href="mailto:zombienw@gmail.com"><i class="fas fa-envelope fa-2x m-4 md:text-5xl text-4xl hover:text-gray-300"></i></a>
						<a href="https://twitter.com/zombie_nw"><i class="fab fa-twitter fa-2x m-4 md:text-5xl text-4xl hover:text-blue-300"></i></a>
					</div>
				</div>
				<img src="/assets/logo.png" alt="Star with sword in it" class="overflow-hidden mx-auto h-full rounded-xl md:block hidden" />
			</div>
		</div>
	</div>
</div>
