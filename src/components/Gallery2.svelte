<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { getImages } from '../stores/repoImages';
	const dispatch = createEventDispatcher();
	export let repoImages;
	export let remix;
	const openImage = (e) => {
		if (remix) {
			dispatch('drawOnImage', e);
		} else {
			dispatch('openImage', e);
		}
	};

	let imageDetail = true;

	const showImageDetail = (e) => {
		if (imageDetail) {
			e.srcElement.children[1].style.visibility = 'visible';
			e.srcElement.children[0].children[0].style.transform = 'scale(1.2)';
		} else {
			e.srcElement.children[1].style.visibility = 'hidden';
			e.srcElement.children[0].children[0].style.transform = 'scale(1)';
		}
		imageDetail = !imageDetail;
	};

	//load on scroll
	let count = 20;
	let createInfoModals = true;

	let columns;

	const resizeGallery = () => {
		if (window.innerWidth <= 500) {
			columns = 1;
		} else if (window.innerWidth > 500 && window.innerWidth <= 700) {
			columns = 2;
		} else if (window.innerWidth > 700 && window.innerWidth <= 1500) {
			columns = 3;
		} else {
			columns = 4;
		}
	};

	onMount(async () => {
		resizeGallery();
		window.onresize = resizeGallery;
		//don't create info modals on mobile

		if (window.screen.width <= 560) {
			createInfoModals = false;
			window.addEventListener('scroll', scrollFunction);
		}
		let gallery = document.getElementById('gallery');
		let scroll = true;
		let lastScrollTop = 0;

		gallery.addEventListener('scroll', scrollFunction);
		function scrollFunction() {
			let st = window.pageXOffset || gallery.scrollTop;
			if (st < lastScrollTop) {
				//detect scroll up
				return;
			} else if (gallery.scrollTop + window.innerHeight > gallery.scrollHeight - 100 && scroll) {
				if (count > repoImages) {
					//we request images than are in the repo so stop
					return;
				}
				count += 10;
				getImages(count);

				scroll = false;
			} else {
				scroll = true;
			}
			lastScrollTop = st <= 0 ? 0 : st;
		}

		let imgContainer = document.getElementsByClassName('gallery-item');
		for (let i = 0; i < imgContainer.length; i++) {
			imgContainer[i].addEventListener('mouseover', function (e) {});
		}
	});
</script>

<div class="gallery" id="gallery">
	<div class="flex-container" id="flex-container1">
		{#each repoImages as image, i}
			{#if i % columns == 0}
				<div class="gallery-container" on:click={openImage(image)}>
					<div class="gallery-item" on:mouseenter={showImageDetail} on:mouseleave={showImageDetail}>
						<div class="image">
							<img src={image.link} alt="" />
						</div>
						{#if createInfoModals}
							<div class="img-info" style="visibility: hidden">
								<div class="info-text">
									<p>{image.date}</p>
									{#if image.location !== 'undefined'}
										<p>{image.location}</p>
									{/if}
									<h2 class="desc-text">{image.title}</h2>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	{#if columns == 2 || columns == 3 || columns == 4}
		<div class="flex-container" id="flex-container2">
			{#each repoImages as image, i}
				{#if i % columns == 1}
					<div class="gallery-container" on:click={openImage(image)}>
						<div
							class="gallery-item"
							on:mouseenter={showImageDetail}
							on:mouseleave={showImageDetail}
						>
							<div class="image">
								<img src={image.link} alt="" />
							</div>
							{#if createInfoModals}
								<div class="img-info" style="visibility: hidden">
									<div class="info-text">
										<p>{image.date}</p>
										{#if image.location !== 'undefined'}
											<p>{image.location}</p>
										{/if}
										<h2 class="desc-text">{image.title}</h2>
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	{#if columns == 3 || columns == 4}
		<div class="flex-container" id="flex-container3">
			{#each repoImages as image, i}
				{#if i % columns == 2}
					<div class="gallery-container" on:click={openImage(image)}>
						<div
							class="gallery-item"
							on:mouseenter={showImageDetail}
							on:mouseleave={showImageDetail}
						>
							<div class="image">
								<img src={image.link} alt="" />
							</div>
							{#if createInfoModals}
								<div class="img-info" style="visibility: hidden">
									<div class="info-text">
										<p>{image.date}</p>
										{#if image.location !== 'undefined'}
											<p>{image.location}</p>
										{/if}
										<h2 class="desc-text">{image.title}</h2>
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	{#if columns == 4}
		<div class="flex-container" id="flex-container4">
			{#each repoImages as image, i}
				{#if i % columns == 3}
					<div class="gallery-container" on:click={openImage(image)}>
						<div
							class="gallery-item"
							on:mouseenter={showImageDetail}
							on:mouseleave={showImageDetail}
						>
							<div class="image">
								<img src={image.link} alt="" />
							</div>
							{#if createInfoModals}
								<div class="img-info" style="visibility: hidden">
									<div class="info-text">
										<p>{image.date}</p>
										{#if image.location !== 'undefined'}
											<p>{image.location}</p>
										{/if}
										<h2 class="desc-text">{image.title}</h2>
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.gallery {
		background: linear-gradient(0deg, #ffffff 0%, #0094ff 100%);
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
		width: 100vw;
		height: 100vh;
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
		cursor: pointer;
	}

	.gallery-item .image {
		display: grid;
		width: 100%;
		/*height: 100%;*/
		overflow: hidden;
	}

	.gallery-item .image img {
		width: 100%;
		/*height: 100%;*/
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

	.info-text {
		position: absolute;
		bottom: 0px;
		margin-left: 10px;
	}

	.info-text > h2 {
		margin-top: 5px;
		display: flex;
		text-align: left;
		line-height: unset;
	}

	p {
		margin: 0px;
		font-size: unset;
		line-height: unset;
	}

	.desc-text {
		margin-top: 5px;
		font-size: 20px;
	}

	img:hover {
		transform: scale(1.2);
		-ms-transform: scale(1.2); /* IE 9 */
		-moz-transform: scale(1.2); /* Firefox */
		-webkit-transform: scale(1.2); /* Safari and Chrome */
		-o-transform: scale(1.2); /* Opera */
	}

	@media (max-width: 1500px) {
		.gallery {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (max-width: 700px) {
		.gallery {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 500px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
