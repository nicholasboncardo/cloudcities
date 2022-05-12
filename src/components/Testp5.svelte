<script>
	import P5 from 'p5-svelte';
	export let propValue;
	export let contributeModal;
	export let drawInstructions;
	let backgroundImage = propValue;
	console.log('contribute modal: ', contributeModal);
	let contributeText = contributeModal.map((element) => {
		if (element.includes('<span>')) {
			return element.split('<span>').pop().split('<')[0];
		} else if (element.includes('<p>')) {
			return element.split('<p>').pop().split('<')[0];
		} else {
			return element.split('">').pop().split('<')[0];
		}
	});
	console.log('contributeText: ', contributeText);

	let strokeWidth = 4;
	let red = 0;
	let blue = 0;
	let green = 0;

	let moveCanvas; //set true when user moves over canvas on mobile
	console.log('drawInstructions: ', drawInstructions);
	if (drawInstructions) {
		moveCanvas = true;
	}
	let canvas;
	const sketch = (p5) => {
		let image;

		p5.preload = () => {
			moveCanvas = false;
			console.log('preload');
			//ToDo: load images from WP
			image = p5.loadImage(backgroundImage);
		};

		let canvasRef;
		p5.setup = () => {
			//Handle width of canvas based on
			console.log('width: ', image.width);
			console.log('height: ', image.height);
			if (p5.windowWidth > 500) {
				if (image.width < image.height) {
					let canvasHeight = image.height / (image.width / p5.windowWidth);
					canvas = p5.createCanvas(p5.windowWidth, canvasHeight);
				} else {
					canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
				}
			} else if (p5.windowWidth < 500 && image.width < image.height) {
				canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
			} else if (p5.windowWidth < 500) {
				canvas = p5.createCanvas(image.width / 2, p5.windowHeight);
			}
			p5.background(image);

			let container = document.getElementById('canvas-container');

			container.addEventListener('touchstart', (event) => {
				if (event.touches.length === 2) {
					moveCanvas = true;
				}
			});
			container.addEventListener('touchmove', (event) => {
				if (event.touches.length === 2) {
					moveCanvas = true;
				}
			});
			container.addEventListener('touchend', (event) => {
				if (moveCanvas) {
					moveCanvas = false;
				}
			});

			let redoButton = document.getElementById('r-button');
			redoButton.addEventListener('click', function () {
				p5.clear();
				p5.background(image);
			});
			redoButton.addEventListener('touchstart', function () {
				p5.clear();
				p5.background(image);
			});
		};

		let x = 0,
			y = 0,
			px = 0,
			py = 0,
			easing = 0.3;
		p5.mousePressed = () => {
			if (finishedDrawing || moveCanvas || pallette || overButton) {
				return;
			}
			// Assign current mouse position to variables.
			x = p5.mouseX;
			y = p5.mouseY;
			px = p5.mouseX;
			py = p5.mouseY;
			// Prevent default functionality.
			return false;
		};
		p5.touchMoved = () => {
			if (finishedDrawing || moveCanvas || pallette || overButton) {
				return;
			}
			let targetX = p5.mouseX;
			let targetY = p5.mouseY;
			x += (targetX - x) * easing;
			y += (targetY - y) * easing;
			p5.strokeWeight(strokeWidth);
			p5.stroke(red, blue, green);
			p5.line(x, y, px, py);
			px = x;
			py = y;

			// Prevent default functionality.
			return false;
		};

		p5.windowResized = () => {
			//console.log('canvasRef: ', canvasRef);
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
			p5.background(image);
		};
	};

	//set color

	//set stroke width and highlight chosen width with white background
	let strokeButtons = document.getElementsByClassName('stroke-button');
	const setStrokeWidth = (e) => {
		if (e.target.id === 'small-stroke') {
			strokeWidth = 2;
		} else if (e.target.id === 'medium-stroke') {
			strokeWidth = 4;
		} else if (e.target.id === 'big-stroke') {
			strokeWidth = 6;
		}
		strokeButtons.forEach((element) => {
			if (element !== e.target) {
				element.style.border = 'none';
			} else {
				element.style.border = 'solid 4px #00D1FF';
			}
		});
	};

	let canvasTitle;
	let canvasLocation;
	let canvasDescription;
	let painterName;

	let notEnoughInfo;
	let uploads = JSON.parse(localStorage.getItem('cloudUploads'));
	const uploadArray = ['none'];
	if (!uploads) {
		localStorage.setItem('cloudUploads', JSON.stringify(uploadArray));
	}
	let allowUpload = true;
	const submitImage = () => {
		if (canvasTitle && allowUpload) {
			uploads = JSON.parse(localStorage.getItem('cloudUploads'));
			console.log('uploads: ', uploads);
			uploads.push('upload');
			localStorage.setItem('cloudUploads', JSON.stringify(uploads));
			allowUpload = false;
			notEnoughInfo = false;
			let formData = new FormData();
			formData.append('title', canvasTitle);
			formData.append('location', canvasLocation);
			//formData.append('description', canvasDescription);
			formData.append('name', painterName);
			formData.append('userUploads', uploads.length);
			let canvas = document.getElementById('defaultCanvas0');
			canvas.toBlob(function (blob) {
				formData.append('cloud', blob);
				fetch('/addPostfromServer', {
					method: 'POST',
					body: formData
				}).then((result) => {
					console.log('result: ', result.status);
				});
			});
			finishedDrawing = false;
			moveCanvas = true;
			imageSubmitted = true;
		} else if (!allowUpload) {
			return;
		} else {
			notEnoughInfo = true;
		}
	};

	let imageSubmitted = false;
	let pallette = false;
	let finishedDrawing = false;

	const downloadImage = () => {
		let link = document.createElement('a');
		link.download = 'myCanvas.png';
		link.href = document.getElementById('defaultCanvas0').toDataURL();
		link.click();
	};

	const slideColor = (e) => {
		red = e.srcElement.value;
		blue = e.srcElement.value;
		green = e.srcElement.value;
	};

	let overButton = false;
	const mouseEnterButton = () => {
		overButton = true;
	};

	const mouseLeaveButton = () => {
		overButton = false;
	};

	//enable click on repo on moble (instead a.href)
	const redirectMobile = () => {
		window.location.replace('/');
	};

	const handleExitButton = () => {
		if (pallette) {
			pallette = false;
		}
		if (finishedDrawing) {
			finishedDrawing = false;
		}
		overButton = false;
	};

	let smallButtonBorder;
	let mediumButtonBorder;
	let bigButtonBorder;
	const openPallette = () => {
		pallette = !pallette;
		if (strokeWidth === 2) {
			smallButtonBorder = 'solid 4px #00D1FF';
			mediumButtonBorder = 'none';
			bigButtonBorder = 'none';
		} else if (strokeWidth === 4) {
			smallButtonBorder = 'none';
			mediumButtonBorder = 'solid 4px #00D1FF';
			bigButtonBorder = 'none';
		} else {
			smallButtonBorder = 'none';
			mediumButtonBorder = 'none';
			bigButtonBorder = 'solid 4px #00D1FF';
		}
	};

	const returnToDraw = () => {
		moveCanvas = false;
		window.location.reload();
	};

	const cancelSubmit = () => {
		finishedDrawing = false;
		overButton = false;
	};
</script>

<div id="canvas-container">
	<P5 {sketch} />
	<a href="/">
		<div
			class="icon-button repo-button"
			on:mouseenter={mouseEnterButton}
			on:mouseleave={mouseLeaveButton}
			on:touchstart={redirectMobile}
		/>
	</a>
	{#if pallette}
		<div class="container">
			<div class="modal-center draw-settings">
				<div class="style-section">
					<p>width</p>
					<div class="stroke-width">
						<div
							class="stroke-button"
							id="small-stroke"
							on:click={setStrokeWidth}
							style="border: {smallButtonBorder}"
						/>
						<div
							class="stroke-button"
							id="medium-stroke"
							on:click={setStrokeWidth}
							style="border: {mediumButtonBorder}"
						/>
						<div
							class="stroke-button"
							id="big-stroke"
							on:click={setStrokeWidth}
							style="border: {bigButtonBorder}"
						/>
					</div>
				</div>
				<div class="style-section">
					<p>color</p>
					<div class="stroke-color">
						<input
							type="range"
							min="0"
							max="255"
							on:change={slideColor}
							bind:value={red}
							id="color-slider"
							style="background-color: rgb({red},{blue},{green}"
						/>
					</div>
				</div>
				<button id="pallette-done" on:click={handleExitButton} on:touchstart={handleExitButton}
					>Done</button
				>
			</div>
			<div
				class="icon-button exit-button"
				on:click={handleExitButton}
				on:touchstart={handleExitButton}
			/>
		</div>
	{/if}
	{#if finishedDrawing}
		<div class="container">
			<div class="modal-center submit-image">
				<h2>Contribute to the Cloud Cities repository</h2>
				<div class="input-section">
					<p>{contributeText[0]}</p>
					<input type="text" id="input-title" data-lpignore="true" bind:value={canvasTitle} />
				</div>
				<div class="input-section">
					<p>{contributeText[1]}</p>
					<input type="text" id="input-location" data-lpignore="true" bind:value={canvasLocation} />
				</div>
				<!--
						<div class="input-section">
					<p>{contributeText[2]}</p>
					<input
						type="text"
						id="input-description"
						data-lpignore="true"
						bind:value={canvasDescription}
					/>
				</div>
				-->

				<div class="input-section">
					<p>{contributeText[2]}</p>
					<input type="text" id="input-name" data-lpignore="true" bind:value={painterName} />
				</div>
				<p>{contributeText[3]}</p>
				<div class="flex-row">
					<button id="submit-button" on:click={submitImage}
						>{contributeText[4]} <img src="./cloud_submit.svg" alt="submit" /></button
					>
					<button id="download-button" on:click={downloadImage}
						>{contributeText[5]}<img src="./cloud_download.svg" alt="download" /></button
					>
				</div>
				<button id="cancel-button" on:click={cancelSubmit}>{contributeText[6]}</button>
				{#if notEnoughInfo}
					<p>
						We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.
					</p>
				{/if}
			</div>
			<div
				class="icon-button exit-button"
				on:click={handleExitButton}
				on:touchstart={handleExitButton}
			/>
		</div>
	{/if}
	{#if imageSubmitted}
		<div class="container">
			<div class="modal-center">
				<h2>Thank you! Submission complete</h2>
				<p>Your drawing will be reviewed shortly and subsequently published onto Cloud Cities.</p>
				<div class="flex-row">
					<button on:click={returnToDraw}>Return to drawing</button>
					<a href="/" class="href">
						<button>Visit the repository</button>
					</a>
				</div>
			</div>
		</div>
	{/if}

	{#if !pallette && !finishedDrawing}
		<div
			class="icon-button finished-drawing-button"
			id="finish-button"
			on:click={() => (finishedDrawing = !finishedDrawing)}
			on:touchstart={() => (
				(finishedDrawing = !finishedDrawing), console.log('touch event on pallette')
			)}
			on:mouseenter={mouseEnterButton}
			on:mouseleave={mouseLeaveButton}
		/>
		<div
			class="icon-button pallette-button"
			id="p-button"
			on:click={openPallette}
			on:touchstart={() => (pallette = !pallette)}
			on:mouseenter={mouseEnterButton}
			on:mouseleave={mouseLeaveButton}
		/>
		<div
			class="icon-button redo-button"
			id="r-button"
			on:mouseenter={mouseEnterButton}
			on:mouseleave={mouseLeaveButton}
		/>
	{/if}
</div>

<style>
	.container {
		background: rgba(0, 0, 0, 0.24);
		position: fixed;
		top: 0px;
		z-index: 1000;
		width: 100%;
		height: 100%;
		color: white;
	}

	.repo-button {
		top: 10px;
		left: 10px;
		margin: 10px;
		width: 40px;
		height: 40px;
		background-size: 40px;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url('/button_repository.png');
		position: fixed;
	}
	.draw-settings {
		width: 300px;
		padding: 10px;
	}

	.stroke-color {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.stroke-width {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 40%;
	}

	.stroke-button {
		border-radius: 50%;
		background-color: white;
		cursor: pointer;
		color: transparent;
	}

	#big-stroke {
		width: 30px;
		height: 30px;
	}
	#medium-stroke {
		width: 20px;
		height: 20px;
	}
	#small-stroke {
		width: 10px;
		height: 10px;
	}

	.submit-image {
		position: absolute;
		padding: 20px;
		max-width: none;
		text-align: center;
		width: 60%;
	}

	.finished-drawing-button {
		bottom: 10px;
		right: 10px;
		margin: 10px;
		background-image: url('/button_finish.png');
		position: fixed;
	}

	.redo-button {
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		margin: 10px;
		background-image: url('/button_reset.png');
		position: fixed;
	}

	.modal-center {
		padding: 10px;
	}

	.pallette-button {
		bottom: 10px;
		left: 10px;
		margin: 10px;
		background-image: url('/button_pallette.png');
		position: fixed;
	}

	.style-section,
	.input-section {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1%;
		text-align: left;
	}

	.exit-button {
		bottom: 10px;
		left: 30px;
		margin: 20px;
		width: 20px;
		height: 20px;
		background-size: 20px;
		background-image: url('/button_close.png');
	}

	.input-section p {
		width: 20%;
		word-wrap: break-word;
	}
	input {
		background-color: rgb(0, 0, 0, 0.24);
		border-radius: 20px;
		border: none;
		flex-grow: 3;
		margin: 0px;
		height: 100%;
		z-index: 10000;
		cursor: pointer;
		color: white;
	}

	#color-slider {
		direction: rtl;
	}
	input[type='range'] {
		-webkit-appearance: none;
		background: linear-gradient(90deg, #ffffff 0%, #000000 100%),
			linear-gradient(90deg, #ffffff 0%, #000000 100%),
			linear-gradient(90deg, #ffffff 0%, #000000 100%);
		width: 200px;
		height: 20px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: #0094ff;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}

	button {
		height: 50px;
		width: 49%;
	}

	button > img {
		height: 1em;
	}

	#download-button,
	#submit-button {
		font-size: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#cancel-button {
		width: 100%;
	}

	.flex-row > a {
		width: 49%;
	}

	.flex-row > a > button {
		width: 100%;
	}

	img {
		margin-left: 5px;
	}

	#pallette-done {
		width: 100%;
	}

	@media (max-width: 700px) {
		.submit-image {
			width: 90%;
		}
	}
</style>
