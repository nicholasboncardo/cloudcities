<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { text } from 'svelte/internal';
	const dispatch = createEventDispatcher();
	export let modalText;

	const enterCloudcities = () => {
		console.log('enter cloud cities');
		dispatch('enterCloudcities');
	};

	onMount(async () => {
		console.log('modalText: ', modalText);
		/*
		let res = await fetch(
			'https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_1'
		);
		let resJson = await res.json();
		let content = JSON.parse(resJson[0].grid);
		console.log('resjson: ', content);
		let centerHTML = new DOMParser().parseFromString(content.cont[0].cont, 'text/html');
		centerText = centerHTML.getElementsByTagName('p');
		for (let i = 0; i < centerText.length; i++) {
			innerArray.push(centerText[i].innerHTML);
            console.log("centerText[i].innerHTML, ", centerText[i].innerHTML)
		}
		console.log('center text: ', centerText);
		console.log('inner text: ', innerArray);
        */
	});
</script>

<div class="start-container" transition:fade={{ duration: 1000 }}>
	<div class="modal-center start-info">
		<h2 class="start-headline">Welcome to Cloud Cities</h2>
		{#each modalText as text, i}
			<p>{text}</p>
		{/each}
		<button class="enter-button" on:click={enterCloudcities}>Enter</button>
	</div>
</div>

<style>
	.start-container {
		background: rgba(0, 0, 0, 0.44);
		position: fixed;
		top: 0px;
		z-index: 1000;
		width: 100%;
		height: 100%;
		color: white;
	}

	.start-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		padding: 20px;
		width: 60%;
	}

	button {
		width: 100%;
		height: 30px;
	}
	@media (max-width: 500px) {
		.start-info {
			width: 80%;
		}
	}
</style>
