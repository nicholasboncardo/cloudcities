<script>
	import Gallery2 from '../components/Gallery2.svelte';
	import Overlay from '../components/overlay.svelte';
	import Start from '../components/start.svelte';
	import IndividualPost from '../components/IndividualPost.svelte';
	import { repoImages } from '../stores/repoImages';
	import { welcomeToCloudCities } from '../stores/wpTexts';

	let start = true;
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

{#if start}
	<Start modalText={$welcomeToCloudCities} on:enterCloudcities={leaveStartPage} />
{:else}
	<Overlay openComponent={component} image={chosenImage} on:closeLargeImage={closeIndividualPost} />
{/if}

<Gallery2 on:openImage={openIndividualPost} repoImages={$repoImages} remix={false}/>

{#if individualPost}
	<IndividualPost image={chosenImage} />
{/if}
