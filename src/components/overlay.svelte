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
		window.open('https://cloudcities.studiotomassaraceno.org', '_blank').focus();
	};

	let drawButtonSrc = 'draw-unselected.png';
	let aboutButtonSrc = 'icon_info.png';
	let closeButtonSrc = 'button_close.png';
</script>

<div class="overlay">
	{#if openComponent === 'gallery'}
		<a href="/draw">
			<img
				src={drawButtonSrc}
				alt="draw-button"
				class="icon-button"
				on:click={clickDraw}
				on:mouseenter={() => (drawButtonSrc = 'draw-hover.png')}
				on:mouseleave={() => (drawButtonSrc = 'draw-unselected.png')}
			/>
		</a>
		<h2>Cloud Cities</h2>
		<a href="https://cloudcities.studiotomassaraceno.org">
			<img
				src={aboutButtonSrc}
				alt="about-button"
				class="icon-button"
				on:mouseenter={() => (aboutButtonSrc = 'icon_info_hover.png')}
				on:mouseleave={() => (aboutButtonSrc = 'icon_info.png')}
			/>
		</a>
	{/if}
	{#if openComponent === 'individualPost'}
		<img
			class="icon-button"
			alt="exit-button"
			src={closeButtonSrc}
			on:click={closeLargeImage}
			on:mouseenter={() => (closeButtonSrc = 'button_close_hover.png')}
			on:mouseleave={() => (closeButtonSrc = 'button_close.png')}
		/>
		<h2>{image.title}</h2>
		<a href="https://cloudcities.studiotomassaraceno.org">
			<img
				src={aboutButtonSrc}
				alt="about-button"
				class="icon-button"
				on:mouseenter={() => (aboutButtonSrc = 'icon_info_hover.png')}
				on:mouseleave={() => (aboutButtonSrc = 'icon_info.png')}
			/>
		</a>
	{/if}
	{#if openComponent === 'remix'}
		<h2 id="remix">Select a drawing to re/interpret</h2>
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

	.icon-button {
		position: initial;
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
		/*text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);*/
		margin: 0px;
		max-width: 60vw;
		word-wrap: break-word;
	}

	#remix {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (max-width: 500px) {
		h2 {
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 20px;
			text-align: center;
			letter-spacing: 0.05em;
		}
	}
</style>
