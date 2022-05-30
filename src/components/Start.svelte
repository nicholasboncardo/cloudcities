<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { welcomeTitle } from '../stores/wpTitles';
	const dispatch = createEventDispatcher();
	export let modalText;
	export let title;

	const enterCloudcities = () => {
		dispatch('enterCloudcities');
	};

	let textField;
	let button;
	onMount(async () => {
		//titleField = document.getElementById('title');
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

<div class="modal-container" transition:fade={{ duration: 1000 }}>
	<div class="modal-info">
		<h2 id="title" class="start-headline">{title}</h2>
		<div id="text" />
		<button id="enter-button" on:click={enterCloudcities}>Enter</button>
	</div>
</div>

<style>
	.modal-container {
		z-index: 1000;
	}

	button {
		width: 100%;
	}

	@media (max-width: 500px) {
		.modal-info {
			width: 80%;
		}
	}
</style>
