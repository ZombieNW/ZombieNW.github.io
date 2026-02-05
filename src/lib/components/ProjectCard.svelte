<script>
	export var title = '';
	export var description = '';
	export var color = '';

	const colorMap = {
		green: { bg: 'rgb(34 197 94 / 0.2)', border: 'rgb(34 197 94 / 0.3)' },
		red: { bg: 'rgb(239 68 68 / 0.2)', border: 'rgb(239 68 68 / 0.3)' },
		blue: { bg: 'rgb(59 130 246 / 0.2)', border: 'rgb(59 130 246 / 0.3)' },
		amber: { bg: 'rgb(245 158 11 / 0.2)', border: 'rgb(245 158 11 / 0.3)' },
		white: { bg: 'rgb(255 255 255 / 0.2)', border: 'rgb(255 255 255 / 0.3)' },
		black: { bg: 'rgb(0 0 0 / 0.2)', border: 'rgb(0 0 0 / 0.3)' }
	};
</script>

<div
	class="flex flex-col border-2 p-4 rounded-xl aspect-video"
	style="background-color: {colorMap[color].bg}; border-color: {colorMap[color].border}"
>
	<h1 class="text-3xl font-bold">{title}</h1>
	<p>{description}</p>
</div>
