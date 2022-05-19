<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let drawInstructions;
	export let propValue;

	let instructionsText;
	onMount(async () => {
		instructionsText = document.getElementById('drawInstructions');
		instructionsText.innerHTML = drawInstructions[0];
		let beginButton = document.getElementById('begin-button');
		beginButton.innerHTML = drawInstructions[1];
	});

	const startDrawing = () => {
		dispatch('closeInstructions');
	};
	const goToAbout = () => {
		window.open('https://cloudcities.studiotomassaraceno.org', '_self');
	};
</script>

<div class="start-draw-container">
	<div class="icon-button about-button" on:click={goToAbout} />
	<div
		class="modal-container"
		style="background-image: url({propValue}); background-size: cover; background-position: center"
	/>
	<div class="modal-container">
		<div class="start-draw-center">
			<div id="drawInstructions" />
			<button id="begin-button" on:click={startDrawing} />
		</div>
	</div>
</div>

<style>
	.start-draw-container {
		position: fixed;
		background-size: cover;
		top: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.24);
		color: white;
	}

	.start-draw-center {
		position: absolute;
		width: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(26px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: 'Raleway', sans-serif;
		padding: 20px;
		gap: 10px;
		text-align: center;
	}

	.about-button {
		z-index: 1000;
	}
	@media (max-width: 500px) {
		.start-draw-center {
			width: 80%;
		}
	}
</style>
