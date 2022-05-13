<script>
	import Gallery2 from '../components/Gallery2.svelte';
	import Overlay from '../components/overlay.svelte';
	import Start from '../components/start.svelte';
	import IndividualPost from '../components/IndividualPost.svelte';
	import Loading from '../components/Loading.svelte';
	import { repoImages } from '../stores/repoImages';
	import { welcomeToCloudCities } from '../stores/wpTexts';
	import { welcomeTitle } from '../stores/wpTitles';
	import { onMount } from 'svelte';
	console.log('title: ', $welcomeTitle);
	let start;
	onMount(() => {
		console.log('referrer: ', document.referrer);
		if (document.referrer === 'http://localhost:3000/draw') {
			start = false;
		} else {
			start = true;
		}
	});

	let component = 'gallery';
	const leaveStartPage = () => {
		start = false;
	};
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
</script>

{#if $welcomeToCloudCities || $welcomeToCloudCities.length <= 0}
	<Loading />
{/if}

{#if start && $welcomeToCloudCities.length > 0}
	<Start
		title={$welcomeTitle}
		modalText={$welcomeToCloudCities}
		on:enterCloudcities={leaveStartPage}
	/>
{:else}
	<Overlay openComponent={component} image={chosenImage} on:closeLargeImage={closeIndividualPost} />
{/if}

<Gallery2 on:openImage={openIndividualPost} repoImages={$repoImages} remix={false} />

{#if individualPost}
	<IndividualPost image={chosenImage} />
{/if}
