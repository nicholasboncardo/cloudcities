<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let propValue;
	export let cloudsToBe;
	export let drawInstructions;
	export let title;
	export let straightToInstructions;

	let instructionsText;
	onMount(async () => {
		let startText = document.getElementById('cloudstobe');
		startText.innerHTML = cloudsToBe[0];

		let drawButton = document.getElementById('draw-button');
		let remixButton = document.getElementById('remix-button');
		let uploadButton = document.getElementById('upload-button');

		drawButton.innerHTML = cloudsToBe[1];
		remixButton.innerHTML = cloudsToBe[2];
		uploadButton.innerHTML = cloudsToBe[3];
		instructionsText = document.getElementById('drawInstructions');
		instructionsText.innerHTML = drawInstructions[0];
		let beginButton = document.getElementById('begin-button');
		beginButton.innerHTML = drawInstructions[1];
	});

	let startDrawModal = true;
	let instructionVisible = 'hidden';

	let chooseUpload = false;
	let imageUrl;
	const chooseImage = () => {
		chooseUpload = true;
	};

	let fileTooBig;
	const getInputImage = () => {
		fileTooBig = false;
		const uploadInput = document.getElementById('upload');
		const imageFile = uploadInput.files[0];
		if (imageFile.size > 10000000) {
			fileTooBig = true;
			return;
		}
		console.log('Blob?: : ', imageFile instanceof Blob);
		imageUrl = URL.createObjectURL(imageFile);
	};

	let drawMode;
	const drawOnUploadImage = () => {
		console.log('chooseImage: ', imageUrl);
		startDrawModal = false;
		instructionVisible = 'visible';
		drawMode = 'drawOnUploadImage';
	};

	const drawOnThisImage = () => {
		startDrawModal = false;
		instructionVisible = 'visible';
		drawMode = 'drawOnThisImage';

		console.log('instructionsText: ', instructionsText);
	};

	const startDrawing = () => {
		if (drawMode === 'drawOnThisImage') {
			let choseBgImage = false;
			dispatch('startDrawing', choseBgImage);
		} else if (drawMode === 'drawOnUploadImage') {
			dispatch('startDrawing', imageUrl);
		}
	};

	const remixCanvas = () => {
		dispatch('remixCanvas');
	};
	const redirectMobile = () => {
		window.location.replace('/');
	};
</script>

<div
	class="start-draw-container"
	transition:fade
	style="background-image: url({propValue}); background-size: cover; background-position: center"
>
	<div
			class="icon-button repo-button"
			on:touchstart={redirectMobile}
			on:click={redirectMobile}
		/>
	{#if startDrawModal && !straightToInstructions}
		<div class="start-draw-center">
			<h2>{title}</h2>
			<div id="cloudstobe" />
			<div class="button-section">
				<button id="draw-button" class="enter-button" on:click={drawOnThisImage} />
				<button id="remix-button" class="enter-button" on:click={remixCanvas} />
				<button id="upload-button" class="enter-button" on:click={chooseImage} />
			</div>
			{#if chooseUpload}
				<input accept=".png, .jpg, .jpeg" type="file" id="upload" on:change={getInputImage} />
				{#if !fileTooBig}
					<button id="drawOnUpload-button" on:click={drawOnUploadImage}>Upload</button>
				{/if}
				{#if fileTooBig}
					<p>Please choose a smaller file</p>
				{/if}
			{/if}
		</div>
	{/if}
	<div class="start-draw-center" style="visibility: {instructionVisible}">
		<div id="drawInstructions" />
		<button id="begin-button" on:click={startDrawing} />
	</div>
</div>

<style>
	.start-draw-container {
		position: absolute;
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

	#drawOnUpload-button {
		height: 48px;
		margin: 0px;
	}

	h2 {
		margin: 0px;
		text-shadow: 0px 0px 3px #ffffff;
	}

	input {
		border-radius: 10px;
		margin: 0px;
		text-align: center;
	}
	.repo-button {
		top: 10px;
		left: 10px;
		margin: 10px;
		width: 40px;
		height: 40px;
		background-size: 40px;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url('/button_repository.png');
		position: fixed;
	}
	@media (max-width: 500px) {
		.start-draw-center {
			width: 80%;
		}
	}
</style>
