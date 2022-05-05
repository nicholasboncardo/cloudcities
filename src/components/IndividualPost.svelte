<script>
	import { fade } from 'svelte/transition';
	export let image;
</script>

<div class="indiv-post-modal" transition:fade>
	<div class="indiv-post-image">
		<img src={image.link} alt="" />
	</div>
	<div class="indiv-post-info">
		<p>{image.date}</p>
		<p class="desc-text">{image.description}</p>
		<p>{image.location}</p>
	</div>
</div>

<style>
	.indiv-post-modal {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 100vh;
	}

	.indiv-post-info {
		position: absolute;
		right: 20px;
		bottom: 20px;
		background: rgba(0, 0, 0, 0.24);
		backdrop-filter: blur(26px);
		border-radius: 20px;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: start;
		padding: 20px;
		min-width: 200px;
		min-height: 100px;
	}

	.indiv-post-image {
		position: absolute;
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.95);
	}

	.indiv-post-image > img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		object-fit: fill;
	}

	.desc-text {
		font-family: 'Fredoka One';
	}

	@media (max-width: 560px) {
		.indiv-post-modal {
			background: rgba(0, 0, 0, 0.85);
			backdrop-filter: blur(10px);
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
		}
	}
</style>
