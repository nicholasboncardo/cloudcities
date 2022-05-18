<script>
	import Draw from '../components/Testp5.svelte';
	import Gallery from '../components/Gallery2.svelte';
	import DrawInstructions from '../components/DrawInstructions.svelte';
	import Overlay from '../components/overlay.svelte';
	import { repoImages } from '../stores/repoImages';
	import { onMount } from 'svelte';
	import StartDrawModal from '../components/StartDrawModal.svelte';
	import { cloudsToBe } from '../stores/wpTexts';
	import { drawInstruction } from '../stores/wpTexts';
	import { drawStartTitle } from '../stores/wpTitles';
	import { contributeModal } from '../stores/wpTexts';
	import { set_attributes } from 'svelte/internal';

	let remix = false;
	let drawInstructions = false;
	let drawBackground;
	let mobile;
	onMount(async () => {
		/*
		window.addEventListener(
			'gesturechange',
			function (e) {
				// User moved fingers further apart
				e.preventDefault();
			},
			false
		);
		*/

		document
			.querySelector('meta[name="viewport"]')
			.setAttribute(
				'content',
				'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1 viewport-fit=cover, user-scalable=no'
			);
		//test if user is on mobile
		let windowWidth =
			window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
		mobile = windowWidth < 500;

		//console.log('mobile: ', mobile);
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
		} else {
			startDrawApp = false;
			drawApp = true;
		}
	};

	const chooseCanvas = () => {
		remix = true;
		startDrawApp = false;
	};
</script>

{#if drawBackground && startDrawApp && $cloudsToBe.length > 0}
	<StartDrawModal
		title={$drawStartTitle}
		drawInstructions={$drawInstruction}
		cloudsToBe={$cloudsToBe}
		propValue={drawBackground}
		{background}
		{straightToInstructions}
		on:startDrawing={setBackground}
		on:remixCanvas={chooseCanvas}
	/>
{/if}

{#if drawApp}
	<Draw propValue={background} {drawInstructions} contributeModal={$contributeModal} {mobile} />
{/if}

{#if remix}
	<Overlay openComponent="remix" image={false} />
	<Gallery repoImages={$repoImages} remix={true} on:drawOnImage={setBackground} />
{/if}

{#if drawInstructions}
	<DrawInstructions
		drawInstructions={$drawInstruction}
		on:closeInstructions={() => (drawInstructions = false)}
	/>
{/if}
