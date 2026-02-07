<script>
	export let text = '';
	export let href = '';
	export let color = '';

	const colorMap = {
		green: { bg: 'rgb(34 197 94 / 0.2)', border: 'rgb(34 197 94 / 0.3)' },
		red: { bg: 'rgb(239 68 68 / 0.2)', border: 'rgb(239 68 68 / 0.3)' },
		blue: { bg: 'rgb(59 130 246 / 0.2)', border: 'rgb(59 130 246 / 0.3)' },
		amber: { bg: 'rgb(245 158 11 / 0.2)', border: 'rgb(245 158 11 / 0.3)' },
		white: { bg: 'rgb(255 255 255 / 0.2)', border: 'rgb(255 255 255 / 0.3)' },
		black: { bg: 'rgb(0 0 0 / 0.2)', border: 'rgb(128 128 128 / 0.3)' },
		purple: { bg: 'rgb(168 85 247 / 0.2)', border: 'rgb(168 85 247 / 0.3)' }
	};
</script>

<a
	{href}
	class="flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:scale-[103%] transition-all duration-300 w-64 mx-2 my-4"
	style="background-color: {colorMap[color].bg}; border-color: {colorMap[color].border}">{text}</a
>
