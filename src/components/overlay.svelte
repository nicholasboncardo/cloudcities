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

	let drawButtonSrc = 'svg/draw.svg';
	let aboutButtonSrc = 'svg/about.svg';
	let closeButtonSrc = 'svg/close.svg';
</script>

<div class="overlay">
	{#if openComponent === 'gallery'}
		<a href="/draw">
			<img
				on:click={clickDraw}
				on:mouseenter={() => (drawButtonSrc = 'svg/draw_hover.svg')}
				on:mouseleave={() => (drawButtonSrc = 'svg/draw.svg')}
				src={drawButtonSrc}
				alt="draw-button"
				class="overlay-button"
			/>
		</a>
		<h2>Cloud Cities</h2>
		<img
			src={aboutButtonSrc}
			alt="about-button"
			class="overlay-button"
			on:click={goToAbout}
			on:mouseenter={() => (aboutButtonSrc = 'svg/about_hover.svg')}
			on:mouseleave={() => (aboutButtonSrc = 'svg/about.svg')}
		/>
	{/if}
	{#if openComponent === 'individualPost'}
		<img
			class="overlay-button"
			alt="exit-button"
			src={closeButtonSrc}
			on:click={closeLargeImage}
			on:mouseenter={() => (closeButtonSrc = 'svg/close_hover.svg')}
			on:mouseleave={() => (closeButtonSrc = 'svg/close.svg')}
		/>
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
		cursor: pointer;
	}
	/*
	.draw {
		background-image: url('/draw-unselected.png');
	}

	.draw:hover {
		
		background-image: url('/draw-hover.png');
	}
	*/
	.close {
		position: relative;
		width: 48px;
		height: 48px;
		background-size: 48px;
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
		max-width: 60vw;
		word-wrap: break-word;
	}

	@media (max-width: 500px) {
		.overlay-button {
			width: 28px;
			height: 28px;
			background-size: 28px;
			margin: 5px;
		}
		h2 {
			font-family: 'Fredoka One';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 20px;
			text-align: center;
			letter-spacing: 0.05em;
		}
	}
</style>
