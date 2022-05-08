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

	let textField;
	let button;
	onMount(async () => {
		console.log('modalText: ', modalText);
		textField = document.getElementById('text');
		button = document.getElementById('enter-button');
	});

	$: if (modalText.length > 0) {
		if (textField) {
			textField.innerHTML = modalText[0];
			button.innerHTML = modalText[1];
			button.children[0].style.margin = '0px';
		}
	}
</script>

<div class="start-container" transition:fade={{ duration: 1000 }}>
	<div class="modal-center start-info">
		<h2 class="start-headline">Welcome to Cloud Cities</h2>
		<div id="text" />
		<button id="enter-button" on:click={enterCloudcities}>Enter</button>
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
