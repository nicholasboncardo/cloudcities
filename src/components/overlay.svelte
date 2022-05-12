<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let openComponent;
	export let image;

	const closeLargeImage = () => {
		dispatch('closeLargeImage');
	};

	const clickDraw = () => {
		dispatch('clickDraw');
	};

	const goToAbout = () => {
		console.log('go to about');
		window.open('https://cloudcities.studiotomassaraceno.org', '_blank').focus();
	};
</script>

<div class="overlay">
	{#if openComponent === 'gallery'}
		<a href="/draw">
			<div on:click={clickDraw} class="overlay-button draw" />
		</a>
		<h2>Cloud Cities</h2>
		<div class="overlay-button about" on:click={goToAbout} />
	{/if}
	{#if openComponent === 'individualPost'}
		<div class="overlay-button close" on:click={closeLargeImage} />
		<h2>{image.title}</h2>
		<a href="/about">
			<div class="overlay-button about" on:click={goToAbout} />
		</a>
	{/if}
</div>

<style>
	.overlay {
		color: white;
		width: 100%;
		position: fixed;
		top: 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1000;
	}

	.overlay-button {
		margin: 10px;
		width: 48px;
		height: 48px;
		background-size: 48px;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.draw {
		background-image: url('/draw-unselected.png');
	}

	.draw:hover {
		cursor: pointer;
		background-image: url('/draw-hover.png');
	}
	.close {
		position: relative;
		width: 30px;
		height: 30px;
		background-size: 30px;
		background-image: url('/button_close.png');
		cursor: pointer;
	}

	.about {
		background-image: url('/icon_info.png');
		cursor: pointer;
	}
	.about:hover {
		background-image: url('/icon_info_hover.png');
	}

	h2 {
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 38px;
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		margin: 0px;
	}
</style>
