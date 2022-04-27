<script> 
    import Gallery from "../components/Gallery.svelte"
    import Overlay from "../components/overlay.svelte"
    import Start from "../components/start.svelte"
    import IndividualPost from "../components/IndividualPost.svelte"
    import {repoImages} from "../stores/repoImages"
    let start = true;
    let component = "gallery"
    const leaveStartPage = () => {
		start=false;
	}
    let individualPost = false;
	let chosenImage; 
	const openIndividualPost = (image) => {
		chosenImage = image.detail;
		individualPost = true;
		component="individualPost"
	}
    const closeIndividualPost = () => {
		individualPost = false;
		component="gallery"
	}
</script>
{#if start}
    <Start on:enterCloudcities={leaveStartPage}/>
    {:else}
    <Overlay openComponent={component} image={chosenImage} on:closeLargeImage={closeIndividualPost}/>
{/if}

<Gallery on:openImage={openIndividualPost} repoImages={$repoImages}/>

{#if individualPost}
    <IndividualPost image={chosenImage}/>
{/if}