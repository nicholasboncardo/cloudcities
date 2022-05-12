<script>
	//Components
	import Gallery from './components/Gallery.svelte';
	import Start from './components/start.svelte';
	import Overlay from './components/overlay.svelte';
	import IndividualPost from './components/IndividualPost.svelte';
	import P5test from './components/Testp5.svelte';
	import StartDrawModal from './components/StartDrawModal.svelte';
	import About from './components/About.svelte';

	//Svelte Functions
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let drawBackground;
	onMount(async () => {
		console.log('app mounted');
		//get background Images from wp and choose random image
		let data = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48'
		);
		let result = await data.json();
		let randomVal = Math.floor(Math.random() * result.length);
		drawBackground = result[randomVal]['source_url'];

		//get info texts from wp and pass to components for display
	});

	//component states
	let gallery = true;
	let start = true;
	let startDrawApp = false;
	let drawApp = false;
	// value of current component passed to Overlay component
	let component;

	const leaveStartPage = () => {
		start = false;
		gallery = true;
		console.log('gallery: ', gallery);
		console.log('start: ', start);
		component = 'gallery';
	};

	//handle users clicking on images, gets data from Gallery component
	let individualPost = false;
	let chosenImage;
	const openIndividualPost = (image) => {
		chosenImage = image.detail;
		individualPost = true;
		component = 'individualPost';
	};

	const closeIndividualPost = () => {
		individualPost = false;
		component = 'gallery';
	};

	const openDrawing = () => {
		console.log('open drawing');
		gallery = false;
		startDrawApp = true;
	};

	const closeDrawing = () => {
		console.log('close drawing');
		gallery = true;
		drawApp = false;
	};

	let background;
	const startDrawing = (e) => {
		console.log('startDrawing: ', e.detail);
		if (e.detail) {
			background = e.detail;
		} else {
			background = drawBackground;
		}
		drawApp = true;
		startDrawApp = false;
	};

	let pathName;
	const goToAbout = () => {
		console.log('go to about');
		navigate('/about');
	};
</script>

<main>
	{#if drawApp}
		<div class="p5-container" transition:fade={{ duration: 1000 }}>
			<P5test on:closeDrawing={closeDrawing} propValue={background} />
		</div>
	{/if}

	{#if startDrawApp}
		<StartDrawModal propValue={drawBackground} on:startDrawing={startDrawing} />
	{/if}
	{#if !drawApp}
		<Overlay
			openComponent={component}
			image={chosenImage}
			on:goToAbout={goToAbout}
			on:closeLargeImage={closeIndividualPost}
			on:clickDraw={openDrawing}
		/>
	{/if}

	{#if gallery}
		<Gallery on:openImage={openIndividualPost} />
	{/if}
	{#if individualPost}
		<IndividualPost image={chosenImage} />
	{/if}
	{#if start}
		<Start on:enterCloudcities={leaveStartPage} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		height: 100%;
		width: 100%;
	}
</style>
