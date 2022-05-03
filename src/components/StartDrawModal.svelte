<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { text } from 'svelte/internal';
	const dispatch = createEventDispatcher();
	export let propValue;
	export let cloudsToBe;
	export let drawInstructions;

	console.log('draw instruction: ', drawInstructions);

	let startDrawModal = true;
	let instructionModal = false;

	let chooseUpload = false;
	let imageUrl;
	const chooseImage = () => {
		chooseUpload = true;
	};

	const getInputImage = () => {
		const uploadInput = document.getElementById('upload');
		const imageFile = uploadInput.files[0];
		imageUrl = URL.createObjectURL(imageFile);
		console.log('chooseImage: ', imageUrl);
	};

	let drawMode;
	const drawOnUploadImage = () => {
		startDrawModal = false;
		instructionModal = true;
		drawMode = 'drawOnUploadImage';
	};

	const drawOnThisImage = () => {
		startDrawModal = false;
		instructionModal = true;
		drawMode = 'drawOnThisImage';
	};

	const startDrawing = () => {
		if (drawMode === 'drawOnThisImage') {
			let choseBgImage = false;
			dispatch('startDrawing', choseBgImage);
		} else if (drawMode === 'drawOnUploadImage') {
			dispatch('startDrawing', imageUrl);
		}
	};
</script>

<div class="start-draw-container" transition:fade style="background-image: url({propValue})">
	{#if startDrawModal}
		<div class="start-draw-center">
			<h2>Clouds to be...</h2>
			{#each cloudsToBe as text, i}
				<p>{text}</p>
			{/each}
			<div class="button-section">
				<button class="enter-button" on:click={drawOnThisImage}>Draw on this Canvas</button>
				<button class="enter-button" on:click={chooseImage}>Upload your own Canvas</button>
			</div>
			{#if chooseUpload}
				<input accept=".png, .jpg, .jpeg" type="file" id="upload" on:change={getInputImage} />
				<button on:click={drawOnUploadImage}>Start</button>
			{/if}
		</div>
	{:else}
		<div class="start-draw-center">
			{#each drawInstructions as text, i}
				<p>{text}</p>
			{/each}
			<button on:click={startDrawing}>Start</button>
		</div>
	{/if}
</div>

<style>
	.start-draw-container {
		position: absolute;
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
	}
	.button-section button {
		height: 100%;
		width: 49%;
	}

	h2 {
		margin: 0px;
		text-shadow: 0px 0px 3px #ffffff;
	}

	@media (max-width: 500px) {
		.start-draw-center {
			width: 80%;
		}
	}
</style>
