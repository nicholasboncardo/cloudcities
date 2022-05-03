<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { getImages } from '../stores/repoImages';
	const dispatch = createEventDispatcher();
	export let repoImages;

	const openImage = (e) => {
		console.log('open image: ', e);
		dispatch('openImage', e);
	};

	let imageDetail = true;

	const showImageDetail = (e) => {
		if (e.srcElement.offsetLeft + e.srcElement.offsetWidth > window.innerWidth - 280) {
			console.log('to left');
			e.srcElement.children[1].style.left = '0px';
			e.srcElement.children[1].style.transform = `translate(-${
				e.srcElement.children[1].offsetWidth - 20
			}px, -20px)`;
		}
		if (e.srcElement.offsetTop + e.srcElement.offsetHeight > window.innerHeight - 100) {
			e.srcElement.children[1].style.top = '0px';
			e.srcElement.children[1].style.transform = `translate(-20px, -${
				e.srcElement.children[1].offsetHeight - 20
			}px)`;
		}
		if (
			e.srcElement.offsetTop + e.srcElement.offsetHeight > window.innerHeight - 100 &&
			e.srcElement.offsetLeft + e.srcElement.offsetWidth > window.innerWidth - 280
		) {
			console.log('change everything');
			e.srcElement.children[1].style.transform = `translate(-${
				e.srcElement.children[1].offsetWidth - 20
			}px, -${e.srcElement.children[1].offsetHeight - 20}px)`;
		}
		if (imageDetail && window.innerWidth > 560) {
			e.srcElement.children[1].style.visibility = 'visible';
		} else {
			e.srcElement.children[1].style.visibility = 'hidden';
		}
		imageDetail = !imageDetail;
	};

	//load on scroll
	let count = 5;
	let createInfoModals = true;
	onMount(async () => {
		//don't create info modals on mobile
		console.log('window.document.innerWidth: ', window.screen.width);
		if (window.screen.width <= 560) {
			createInfoModals = false;
			window.addEventListener("scroll", scrollFunction)
		}
		console.log('onmount');
		let gallery = document.getElementById('gallery');
		let scroll = true;
		gallery.addEventListener('scroll', scrollFunction);
		function scrollFunction() {
			console.log('scroll registered: ', scroll);
			if (gallery.scrollTop + window.innerHeight > gallery.offsetHeight - 150 && scroll) {
				console.log('near bottom');
				count += 5;
				getImages(count);
				scroll = false;
			}
		}
	});
</script>

<div class="gallery" id="gallery">
	{#each repoImages as image, i}
			<div class="gallery-container large">
				<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
					<div class="image" on:click={openImage(image)}>
						<img src={image.link} alt="" />
					</div>
					{#if createInfoModals}
						<div class="modal-info" style="visibility: hidden">
							<div>
								<p>{image.date}</p>
								<p>{image.location}</p>
							</div>
							<p class="desc-text">{image.title}</p>
							<p>{image.description}</p>
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div class="gallery-container">
				<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
					<div class="image" on:click={openImage(image)}>
						<img src={image.link} alt="" />
					</div>
					{#if createInfoModals}
						<div class="modal-info" style="visibility: hidden">
							<p>{image.date} <br /> {image.location}</p>
							<p class="desc-text">{image.description}</p>
							<p>{image.description}</p>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.gallery {
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
		width: 100vw;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 25vh;
		grid-auto-flow: dense;
	}

	.gallery-item {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.gallery-item .image {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.gallery-item .image img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	.large {
		grid-column: span 2;
		grid-row: span 2;
	}

	.modal-info {
		left: 100%;
		top: 100%;
		transform: translate(-20px, -20px);
		z-index: 1000;
		align-items: flex-start;
		text-align: start;
	}

	.modal-info p {
		margin: 3px;
	}

	.desc-text {
		font-size: 20px;
	}

	@media (max-width: 560px) {
		.gallery {
			grid-template-columns: none;
		}
		.large {
			grid-column: span 1;
			grid-row: span 1;
		}
	}

	@media (min-width: 561px) {
		.gallery :nth-child(8) {
			grid-row: 4;
			grid-column: 1;
		}
		.gallery :nth-child(9) {
			grid-row: 4;
			grid-column: 2;
		}
	}
</style>
