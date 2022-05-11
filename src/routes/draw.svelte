<script>
	import Draw from '../components/Testp5.svelte';
	import Gallery from '../components/Gallery2.svelte';
	import { repoImages } from '../stores/repoImages';
	import { onMount } from 'svelte';
	import StartDrawModal from '../components/StartDrawModal.svelte';
	//import DrawInstructions from '../components/DrawInstructModal.svelte';
	import { cloudsToBe } from '../stores/wpTexts';
	import { drawInstruction } from '../stores/wpTexts';
	import { drawStartTitle } from '../stores/wpTitles';

	let remix = false;

	let drawBackground;
	onMount(async () => {
		//get background Images from wp and choose random image
		let data = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48'
		);
		let result = await data.json();
		let randomVal = Math.floor(Math.random() * result.length);
		drawBackground = result[randomVal]['source_url'];
		console.log('cloudstobe in onmount: ', $cloudsToBe);
		//get info texts from wp and pass to components for display

		//Somehow need this from frame to expand on mobile:
		/*
		let html = document.getElementsByTagName('html');
		let body = document.getElementsByTagName('body');
		console.log('html: ', html[0]);
		html[0].style.overflowY="hidden";
		body[0].style.overflowY="hidden";
        */
	});

	let background;
	let drawApp = false;
	let startDrawApp = true;
	let drawInstructions = false;
	const setBackground = (e) => {
		console.log('startDrawing: ', e.detail);
		if (e.detail) {
			background = e.detail;
		} else {
			background = drawBackground;
			console.log('startDrawing BG: ', drawBackground);
		}

		if (remix) {
			remix = false;
			startDrawApp = true;
			drawBackground = e.detail.link;
		} else {
			startDrawApp = false;
			drawApp = true;
		}
	};

	const chooseCanvas = () => {
		console.log('choose canvas');
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
		on:startDrawing={setBackground}
		on:remixCanvas={chooseCanvas}
	/>
{/if}

{#if drawApp}
	<Draw propValue={background} />
{/if}

{#if remix}
	<Gallery repoImages={$repoImages} remix={true} on:drawOnImage={setBackground} />
{/if}
