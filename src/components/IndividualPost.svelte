<script>
	import { fade } from 'svelte/transition';
	export let image;
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	onMount(() => {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		function closeModal() {
			dispatch('closeBigImage');
		}
		let modal = document.getElementsByClassName('indiv-post-image')[0];
		let imageElement = document.getElementById('bigImage');
		modal.addEventListener('click', closeModal, true);
		imageElement.addEventListener('mouseover', function () {
			modal.removeEventListener('click', closeModal, true);
		});
		imageElement.addEventListener('mouseout', function () {
			modal.addEventListener('click', closeModal, true);
		});
	});
</script>

<div class="indiv-post-modal">
	<div class="indiv-post-image">
		<img src={image.link} alt="" id="bigImage" />
	</div>
	<div class="indiv-post-info">
		<p>{image.date}</p>
		{#if image.name.length > 0 && image.name !== 'undefined'}
			<h2>{image.name}</h2>
		{/if}
		{#if image.location !== 'undefined'}
			<p>{image.location}</p>
		{/if}
	</div>
</div>

<style>
	.indiv-post-modal {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
	}

	.indiv-post-info {
		position: absolute;
		right: 20px;
		bottom: 20px;
		background: rgba(0, 0, 0, 0.24);
		backdrop-filter: blur(26px);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 10px;
		min-width: 200px;
	}
	.indiv-post-info > p {
		margin: 0px;
	}

	.indiv-post-image {
		position: absolute;
		height: 100%;
		width: 100%;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.25);
		-webkit-backdrop-filter: blur(26px);
		backdrop-filter: blur(26px);
	}

	.indiv-post-image > img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		object-fit: fill;
	}

	@media (max-width: 500px) {
		.indiv-post-modal {
			background: rgba(0, 0, 0, 0.24);
			-webkit-backdrop-filter: blur(26px);
			backdrop-filter: blur(26px);
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
		}
		.indiv-post-image > img {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			object-fit: scale-down;
		}

		.indiv-post-info {
			width: 50%;
			bottom: 10px;
			right: 10px;
		}
	}
</style>
