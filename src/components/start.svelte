<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { welcomeTitle } from '../stores/wpTitles';
	const dispatch = createEventDispatcher();
	export let modalText;
	export let title;

	const enterCloudcities = () => {
		console.log('enter cloud cities');
		dispatch('enterCloudcities');
	};

	let textField;
	let button;
	onMount(async () => {
		//titleField = document.getElementById('title');
		textField = document.getElementById('text');
		button = document.getElementById('enter-button');
	});
	console.log('title in onmount: ', typeof title);
	$: if (typeof title !== 'undefined') {
		//titleField.innerText = title;
	}
	$: if (modalText.length > 0) {
		if (textField) {
			textField.innerHTML = modalText[0];
			button.innerHTML = modalText[1];
			button.children[0].style.margin = '0px';
			console.log('title in onmount: ', typeof title);
		}
	}
</script>

<div class="start-container" transition:fade={{ duration: 1000 }}>
	<div class="modal-center start-info">
		<h2 id="title" class="start-headline">{title}</h2>
		<div id="text" />
		<button id="enter-button" on:click={enterCloudcities}>Enter</button>
	</div>
</div>

<style>
	.start-container {
		background: rgba(0, 0, 0, 0.75);
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
