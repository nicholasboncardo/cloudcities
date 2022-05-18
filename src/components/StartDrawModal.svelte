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
		imageUrl = URL.createObjectURL(imageFile);
	};

	let drawMode;
	const drawOnUploadImage = () => {
		startDrawModal = false;
		instructionVisible = 'visible';
		drawMode = 'drawOnUploadImage';
	};

	const drawOnThisImage = () => {
		startDrawModal = false;
		instructionVisible = 'visible';
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

	const remixCanvas = () => {
		dispatch('remixCanvas');
	};
	const redirectMobile = () => {
		window.location.replace('/');
	};
	const goToAbout = () => {
		window.open('https://cloudcities.studiotomassaraceno.org', '_self');
	};
</script>

<div
	class="modal-container"
	transition:fade
	style="background-image: url({propValue}); background-size: cover; background-position: center"
>
	<div class="icon-button repo-button" on:touchstart={redirectMobile} on:click={redirectMobile} />
	<div class="modal-container" />
	<h2 id="title">Cloud Cities</h2>
	<div class="icon-button about-button" on:click={goToAbout} />
	{#if startDrawModal && !straightToInstructions}
		<div class="modal-info">
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
	<div class="modal-info" style="visibility: {instructionVisible}">
		<div id="drawInstructions" />
		<button id="begin-button" on:click={startDrawing} />
	</div>
</div>

<style>
	.button-section {
		display: flex;
		justify-content: space-between;
		height: 48px;
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
		width: 100%;
		margin: 0px;
	}

	h2 {
		margin: 0px;
		/*text-shadow: 0px 0px 3px #ffffff;*/
	}

	p {
		margin: 0px;
	}

	input {
		margin: 0px;
		text-align: center;
		width: 100%;
	}
	.repo-button {
		background-image: url('/button_repository.png');
		z-index: 10000;
	}

	#cloudstobe {
		text-align: center;
	}

	#begin-button {
		width: 100%;
	}
	#title {
		position: fixed;
		top: 0px;
		left: 50%;
		transform: translate(-50%);
		color: white;
		font-weight: 400;
		font-size: 32px;
		line-height: 38px;
		/*text-shadow: 0px 0px 3px #ffffff;*/
		margin: 0px;
		top: 10px;
	}

	@media (max-width: 500px) {
		.modal-info {
			width: 80%;
		}

		#title {
			position: fixed;
			font-weight: 400;
			font-size: 18px;
			line-height: 20px;
			top: 5px;
		}
	}
	@media (max-height: 500px) {
		.modal-info {
			width: 80%;
		}
		#title {
			position: fixed;
			font-weight: 400;
			font-size: 18px;
			line-height: 20px;
			top: 5px;
		}
	}
</style>
