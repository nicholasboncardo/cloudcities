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
		if (imageDetail) {
			e.srcElement.children[1].style.visibility = 'visible';
			console.log('element: ', e.srcElement.children[0].children[0]);
			e.srcElement.children[0].children[0].style.transform = 'scale(1.2)';
		} else {
			e.srcElement.children[1].style.visibility = 'hidden';
			e.srcElement.children[0].children[0].style.transform = 'scale(1)';
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
			window.addEventListener('scroll', scrollFunction);
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

		let imgContainer = document.getElementsByClassName('gallery-item');
		for (let i = 0; i < imgContainer.length; i++) {
			imgContainer[i].addEventListener('mouseover', function (e) {
				console.log('e: ', e.path);
			});
		}
	});
</script>

<div class="gallery" id="gallery">
	<div class="flex-container" id="flex-container1">
		{#each repoImages as image, i}
			{#if i % 4 == 0}
				<div class="gallery-container" on:click={openImage(image)}>
					<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
						<div class="image">
							<img src={image.link} alt="" />
						</div>
						{#if createInfoModals}
							<div class="img-info" style="visibility: hidden">
								<div class="info-text">
									<p>{image.date}</p>
									<p>{image.location}</p>
									<h2 class="desc-text">{image.title}</h2>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="flex-container" id="flex-container2">
		{#each repoImages as image, i}
			{#if i % 4 == 1}
				<div class="gallery-container" on:click={openImage(image)}>
					<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
						<div class="image">
							<img src={image.link} alt="" />
						</div>
						{#if createInfoModals}
							<div class="img-info" style="visibility: hidden">
								<div class="info-text">
									<p>{image.date}</p>
									<p>{image.location}</p>
									<h2 class="desc-text">{image.title}</h2>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="flex-container" id="flex-container3">
		{#each repoImages as image, i}
			{#if i % 4 == 2}
				<div class="gallery-container" on:click={openImage(image)}>
					<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
						<div class="image">
							<img src={image.link} alt="" />
						</div>
						{#if createInfoModals}
							<div class="img-info" style="visibility: hidden">
								<div class="info-text">
									<p>{image.date}</p>
									<p>{image.location}</p>
									<h2 class="desc-text">{image.title}</h2>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="flex-container" id="flex-container4">
		{#each repoImages as image, i}
			{#if i % 4 == 3}
				<div class="gallery-container" on:click={openImage(image)}>
					<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
						<div class="image">
							<img src={image.link} alt="" />
						</div>
						{#if createInfoModals}
							<div class="img-info" style="visibility: hidden">
								<div class="info-text">
									<p>{image.date}</p>
									<p>{image.location}</p>
									<h2 class="desc-text">{image.title}</h2>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.gallery {
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
		width: 100vw;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	.flex-container {
		display: flex;
		flex-direction: column;
		gap: 0px;
	}

	.gallery-item {
		width: 100%;
		position: relative;
	}

	.gallery-item .image {
        display: grid;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.gallery-item .image img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	.img-info {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		align-items: flex-start;
		text-align: start;
		background-color: rgb(0, 0, 0, 0.24);
		color: white;
	}

	.img-info p {
		margin: 3px;
	}

	.info-text {
		position: absolute;
		bottom: 0px;
		padding: 10px;
	}

	.desc-text {
		font-size: 20px;
	}

	img:hover {
		transform: scale(1.2);
		-ms-transform: scale(1.2); /* IE 9 */
		-moz-transform: scale(1.2); /* Firefox */
		-webkit-transform: scale(1.2); /* Safari and Chrome */
		-o-transform: scale(1.2); /* Opera */
	}

	@media (max-width: 560px) {
		.gallery {
			grid-template-columns: none;
		}
	}
</style>
