<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let drawInstructions;

	let instructionsText;
	onMount(async () => {
		instructionsText = document.getElementById('drawInstructions');
		instructionsText.innerHTML = drawInstructions[0];
		let beginButton = document.getElementById('begin-button');
		beginButton.innerHTML = drawInstructions[1];
	});

	let drawMode;

	const startDrawing = () => {
		dispatch('closeInstructions');
	};
</script>

<div class="start-draw-container">
	<div class="start-draw-center">
		<div id="drawInstructions" />
		<button id="begin-button" on:click={startDrawing} />
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
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(26px);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		gap: 10px;
		text-align: center;
	}

	.button-section {
		display: flex;
		justify-content: space-between;
		height: 50px;
		width: 100%;
		gap: 2px;
	}
	.button-section button {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
	}

	h2 {
		margin: 0px;
		text-shadow: 0px 0px 3px #ffffff;
	}

	input {
		border-radius: 10px;
	}
	@media (max-width: 500px) {
		.start-draw-center {
			width: 80%;
		}
	}
</style>
