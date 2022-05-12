<script>
	import Draw from '../components/Testp5.svelte';
	import Gallery from '../components/Gallery2.svelte';
	import DrawInstructions from '../components/DrawInstructions.svelte';
	import { repoImages } from '../stores/repoImages';
	import { onMount } from 'svelte';
	import StartDrawModal from '../components/StartDrawModal.svelte';
	import { cloudsToBe } from '../stores/wpTexts';
	import { drawInstruction } from '../stores/wpTexts';
	import { drawStartTitle } from '../stores/wpTitles';

	let remix = false;
	let drawInstructions = false;
	let drawBackground;
	onMount(async () => {
		//get background Images from wp and choose random image
		let data = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50'
		);
		let result = await data.json();
		let randomVal = Math.floor(Math.random() * result.length);
		drawBackground = result[randomVal]['source_url'];
	});

	let background;
	let drawApp = false;
	let startDrawApp = true;
	let straightToInstructions = false;
	const setBackground = (e) => {
		console.log('startDrawing: ', e.detail);
		if (e.detail) {
			background = e.detail;
		} else {
			background = drawBackground;
			console.log('startDrawing BG: ', drawBackground);
		}

		if (remix) {
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
		{straightToInstructions}
		on:startDrawing={setBackground}
		on:remixCanvas={chooseCanvas}
	/>
{/if}

{#if drawApp}
	<Draw propValue={background} {drawInstructions} />
{/if}

{#if remix}
	<Gallery repoImages={$repoImages} remix={true} on:drawOnImage={setBackground} />
{/if}

{#if drawInstructions}
	<DrawInstructions
		drawInstructions={$drawInstruction}
		on:closeInstructions={() => (drawInstructions = false)}
	/>
{/if}
