<script>
	import Gallery2 from '../components/Gallery2.svelte';
	import Overlay from '../components/Overlay.svelte';
	import Start from '../components/Start.svelte';
	import IndividualPost from '../components/IndividualPost.svelte';
	import Loading from '../components/Loading.svelte';
	import { repoImages } from '../stores/repoImages';
	import { welcomeToCloudCities } from '../stores/wpTexts';
	import { welcomeTitle } from '../stores/wpTitles';
	import { onMount } from 'svelte';
	let start;
	onMount(() => {
		if (
			document.referrer === 'http://localhost:3000/draw' ||
			document.referrer === 'http://cloudcities.herokuapp.com/draw' ||
			document.referrer === 'https://cloudcities.herokuapp.com/draw' ||
			document.referrer === 'http://cloudcities.org/draw' ||
			document.referrer === 'https://cloudcities.org/draw' ||
			document.referrer === 'http://cloudcities.herokuapp.com'
		) {
			start = false;
		} else {
			start = true;
		}
	});

	$: component = 'gallery';
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

{#if !$welcomeToCloudCities || $repoImages.length <= 8 || !$welcomeTitle || $welcomeTitle === 'undefined'}
	<Loading />
{/if}

{#if start && $welcomeToCloudCities.length > 0 && $welcomeTitle}
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
	<IndividualPost image={chosenImage} on:closeBigImage={closeIndividualPost} />
{/if}
