<!-- Based on https://codepen.io/loktar00/details/DdWxwL by Loktar. Public Pens on CodePen are licensed under MIT unless stated otherwise-->

<script>
	import { onMount, onDestroy } from 'svelte';

	let canvas;
	let ctx;
	let width = 0;
	let height = 0;
	let animationId;
	let resizeObserver;
	let entities = [];

	// Settings
	export let starCount = null;
	export let shootingStarCount = 4;
	export let backgroundColor = '#05004c';
	export let starColor = '#fff';
	export let minStarSize = 0.5;
	export let maxStarSize = 2;
	export let minStarSpeed = 0.05;
	export let maxStarSpeed = 0.25;
	export let minShootingStarLength = 10;
	export let maxShootingStarLength = 90;
	export let minShootingStarSpeed = 3;
	export let maxShootingStarSpeed = 6;

	class Star {
		constructor(x, y) {
			this.reset(x, y);
		}

		reset(x = null, y = null) {
			// Random size and speed
			this.size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
			this.speed = Math.random() * (maxStarSpeed - minStarSpeed) + minStarSpeed;

			// Set position
			if (x !== null && y !== null) {
				this.x = x;
				this.y = y;
			} else if (Math.random() < 0.5) {
				this.x = Math.random() * width;
				this.y = height;
			} else {
				this.y = Math.random() * height;
				this.x = width;
			}
		}

		update() {
			// Move
			this.x -= this.speed;
			this.y -= this.speed;

			// Reset if out of bounds
			if (this.x < 0) {
				this.reset();
			} else {
				ctx.fillRect(this.x, this.y, this.size, this.size); // Draw
			}
		}
	}

	class ShootingStar {
		constructor() {
			this.reset();
		}

		reset() {
			this.x = Math.random() * width;
			this.y = 0;

			this.len =
				Math.random() * (maxShootingStarLength - minShootingStarLength) + minShootingStarLength;
			this.speed =
				Math.random() * (maxShootingStarSpeed - minShootingStarSpeed) + minShootingStarSpeed;

			this.size = Math.random() * 1 + 0.1;
			this.waitTime = Date.now() + Math.random() * 3000 + 500;
			this.active = false;
		}

		update() {
			if (this.active) {
				// Move
				this.x -= this.speed;
				this.y += this.speed;

				// Reset if out of bounds
				if (this.x < -this.len || this.y >= height + this.len) {
					this.reset();
				} else {
					// Draw
					ctx.lineWidth = this.size;
					ctx.beginPath();
					ctx.moveTo(this.x, this.y);
					ctx.lineTo(this.x + this.len, this.y - this.len);
					ctx.stroke();
				}
			} else if (this.waitTime < Date.now()) {
				this.active = true;
			}
		}
	}

	function initCanvas() {
		if (!canvas) return;

		ctx = canvas.getContext('2d');

		updateDimensions();
		initEntities();
	}

	function updateDimensions() {
		const rect = canvas.getBoundingClientRect();
		width = rect.width;
		height = rect.height;

		canvas.width = width;
		canvas.height = height;

		// Redraw background
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, width, height);
	}

	function initEntities() {
		entities = [];

		// Calculate star count based on area if not set
		const calculatedStarCount = starCount || Math.floor((height * width) / 500);

		// Spawn Stars
		for (let i = 0; i < calculatedStarCount; i++) {
			entities.push(new Star(Math.random() * width, Math.random() * height));
		}

		// Spawn shooting stars
		for (let i = 0; i < shootingStarCount; i++) {
			entities.push(new ShootingStar());
		}
	}

	function animate() {
		if (!ctx) return;

		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = starColor;
		ctx.strokeStyle = starColor;

		for (let i = entities.length - 1; i >= 0; i--) {
			entities[i].update();
		}

		animationId = requestAnimationFrame(animate);
	}

	function handleResize() {
		updateDimensions();
		initEntities();
	}

	onMount(() => {
		initCanvas();
		animate();

		resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(canvas);
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});
</script>

<canvas bind:this={canvas} class={$$restProps.class || ''} {...$$restProps}></canvas>

<style>
	canvas {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>
