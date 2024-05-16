<!-- Sourced from https://codepen.io/loktar00/details/DdWxwL by Loktar. Public Pens on CodePen are licensed under MIT unless stated otherwise-->

<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let background;
	let bgCtx;
	let width;
	let height;

	onMount(() => {
		var requestAnimationFrame =
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		window.requestAnimationFrame = requestAnimationFrame;

		// Var Establishments
		bgCtx = background.getContext('2d');
		height = background.offsetHeight;
		width = background.offsetWidth;
		background.width = width;
		background.height = height;

		//Fill Background
		bgCtx.fillStyle = '#05004c';
		bgCtx.fillRect(0, 0, width, height);

		function Star(options) {
			this.size = Math.random() * 2;
			this.speed = Math.random() * 0.25;
			this.x = options.x;
			this.y = options.y;
		}

		Star.prototype.reset = function () {
			this.size = Math.random() * 2;
			this.speed = Math.random() * 0.25;
			this.x = Math.random() * width;
			this.y = Math.random() * height;
		};

		Star.prototype.update = function () {
			this.x -= this.speed;
			this.y -= this.speed;
			if (this.x < 0) {
				this.reset();
			} else {
				bgCtx.fillRect(this.x, this.y, this.size, this.size);
			}
		};

		function ShootingStar() {
			this.reset();
		}

		ShootingStar.prototype.reset = function () {
			this.x = Math.random() * width;
			this.y = 0;
			this.len = Math.random() * 80 + 10;
			this.speed = Math.random() + 3;
			this.size = Math.random() * 1 + 0.1;
			// this is used so the shooting stars arent constant
			this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
			this.active = false;
		};

		ShootingStar.prototype.update = function () {
			if (this.active) {
				this.x -= this.speed;
				this.y += this.speed;
				if (this.x < -50 || this.y >= height) {
					this.reset();
				} else {
					bgCtx.lineWidth = this.size;
					bgCtx.beginPath();
					bgCtx.moveTo(this.x, this.y);
					bgCtx.lineTo(this.x + this.len, this.y - this.len);
					bgCtx.stroke();
				}
			} else {
				if (this.waitTime < new Date().getTime()) {
					this.active = true;
				}
			}
		};

		//Spawn Stars
		var entities = [];
		for (var i = 0; i < height * 2; i++) {
			entities.push(
				new Star({
					x: Math.random() * width,
					y: Math.random() * height
				})
			);
		}

		// Spawn Shooting Stars
		entities.push(new ShootingStar());
		entities.push(new ShootingStar());

		// Animate
		function animate() {
			//bgCtx.fillStyle = '#110E19';
			bgCtx.clearRect(0, 0, width, height);
			bgCtx.fillStyle = '#ffffff';
			bgCtx.strokeStyle = '#ffffff';

			var entLen = entities.length;

			while (entLen--) {
				entities[entLen].update();
			}
			requestAnimationFrame(animate);
		}
		animate();
	});
</script>

<canvas id="bgCanvas" class={$$restProps.class || ''} bind:this={background}></canvas>

<style>
	canvas {
		/* position: absolute; */
		top: 0;
		left: 0;
		margin: 0;
		width: 100%;
		overflow: hidden;
	}
</style>
