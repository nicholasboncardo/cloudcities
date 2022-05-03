<script>
	import Draw from '../components/Testp5.svelte';
	import { onMount } from 'svelte';
	import StartDrawModal from '../components/StartDrawModal.svelte';
	import DrawInstructions from '../components/DrawInstructModal.svelte';
	import { cloudsToBe } from '../stores/wpTexts';
	import { drawInstruction } from '../stores/wpTexts';

	let drawBackground;
	onMount(async () => {
		//get background Images from wp and choose random image
		let data = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48'
		);
		let result = await data.json();
		let randomVal = Math.floor(Math.random() * result.length);
		drawBackground = result[randomVal]['source_url'];
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
		startDrawApp = false;
		drawApp = true;
	};
</script>

{#if drawBackground && startDrawApp}
	<StartDrawModal
		drawInstructions={$drawInstruction}
		cloudsToBe={$cloudsToBe}
		propValue={drawBackground}
		on:startDrawing={setBackground}
	/>
{/if}

{#if drawApp}
	<Draw propValue={background} />
{/if}
