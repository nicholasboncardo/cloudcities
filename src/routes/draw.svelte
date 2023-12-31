<script>
	import Draw from '../components/Testp5.svelte';
	import Gallery from '../components/Gallery2.svelte';
	import DrawInstructions from '../components/DrawInstructions.svelte';
	import Overlay from '../components/Overlay.svelte';
	import { repoImages } from '../stores/repoImages';
	import { onMount } from 'svelte';
	import StartDrawModal from '../components/StartDrawModal.svelte';
	import { cloudsToBe } from '../stores/wpTexts';
	import { drawInstruction } from '../stores/wpTexts';
	import { drawStartTitle } from '../stores/wpTitles';
	import { contributeModal } from '../stores/wpTexts';
	import LandscapeModal from '../components/LandscapeModal.svelte';
	import Submitting from '../components/Submitting.svelte';
	import ImageSubmitted from '../components/ImageSubmittedModal.svelte';

	let remix = false;
	let drawInstructions = false;
	let drawBackground;
	let mobile;
	let landscape;
	let submitSuccess;
	let disableDraw = false;

	onMount(async () => {
		window.addEventListener(
			'gesturechange',
			function (e) {
				// User moved fingers further apart
				e.preventDefault();
			},
			false
		);

		//test if user is on mobile
		let windowWidth =
			window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
		mobile = windowWidth < 500;

		//get background Images from wp and choose random image
		let data = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50'
		);
		let result = await data.json();
		let randomVal = Math.floor(Math.random() * result.length);
		drawBackground = result[randomVal]['source_url'];
	});

	let background;
	let drawApp = false; //starts drawing app if true
	let startDrawApp = true; //starts drawing info if true
	let straightToInstructions = false; //skips info if true
	const setBackground = (e) => {
		if (e.detail) {
			//means user has uploaded image
			background = e.detail;
		} else {
			//means user chooses given canvas
			background = drawBackground;
		}

		if (remix) {
			//means user chooses remix
			drawInstructions = true;
			remix = false;
			drawApp = true;
			background = e.detail.link;
			disableDraw = true;
		} else {
			startDrawApp = false;
			drawApp = true;
		}
	};

	const closeInstructions = () => {
		drawInstructions = false;
		disableDraw = false;
		if (landscapeMode) {
			landscape = true;
		}
	};

	const chooseCanvas = () => {
		remix = true;
		startDrawApp = false;
	};

	let landscapeMode;
	const openLandscape = () => {
		landscapeMode = true;
		if (!drawInstructions) {
			landscape = true;
		}
	};

	const closeLandscape = () => {
		landscape = false;
	};

	let waiting;
	const clickSubmit = () => {
		waiting = true;
		disableDraw = true;
	};

	const imageSubmitted = () => {
		waiting = false;
		submitSuccess = true;
	};

	const returnToDraw = () => {
		submitSuccess = false;
		disableDraw = false;
	};
	const cancelSubmit = () => {
		disableDraw = false;
	};
	const returnHome = () => {
		window.open('https://cloudcities.org', '_self');
	};
</script>

{#if drawBackground && startDrawApp && $cloudsToBe.length > 0}
	<StartDrawModal
		title={$drawStartTitle}
		drawInstructions={$drawInstruction}
		cloudsToBe={$cloudsToBe}
		propValue={drawBackground}
		{straightToInstructions}
		on:startDrawing={setBackground}
		on:remixCanvas={chooseCanvas}
	/>
{/if}

{#if landscape}
	<LandscapeModal on:closeLandscape={closeLandscape} />
{/if}

{#if drawApp}
	<Draw
		propValue={background}
		contributeModal={$contributeModal}
		{mobile}
		bind:disableDraw
		on:openLandscapeModal={openLandscape}
		on:imageSubmitted={imageSubmitted}
		on:clickSubmit={clickSubmit}
		on:cancelSubmit={cancelSubmit}
	/>
{/if}

{#if remix}
	<Overlay openComponent="remix" image={false} />
	<Gallery repoImages={$repoImages} remix={true} on:drawOnImage={setBackground} />
{/if}

{#if drawInstructions}
	<DrawInstructions
		propValue={background}
		drawInstructions={$drawInstruction}
		on:closeInstructions={closeInstructions}
	/>
{/if}

{#if waiting}
	<Submitting />
{/if}

{#if submitSuccess}
	<ImageSubmitted on:returnToDraw={returnToDraw} on:returnHome={returnHome} />
{/if}
