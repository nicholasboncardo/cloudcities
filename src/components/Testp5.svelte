<script>
	import P5 from 'p5-svelte';
	export let propValue;
	export let contributeModal;
	export let drawInstructions;
	export let mobile;
	let backgroundImage = propValue;

	let contributeText = contributeModal.map((element) => {
		if (element.includes('<span>')) {
			return element.split('<span>').pop().split('<')[0];
		} else if (element.includes('<p>')) {
			return element.split('<p>').pop().split('<')[0];
		} else {
			return element.split('">').pop().split('<')[0];
		}
	});
	//let tandcLinK = contributeModal[3].split('href="').pop().split('"')[0];
	let tandcText = contributeModal[3].split('<span>').pop().split('<')[0];
	let tandcAelemText = contributeModal[3]
		.split('style="text-decoration: underline;">')
		.pop()
		.split('<')[0];

	let strokeWidth = 10;
	let red = 0;
	let blue = 0;
	let green = 0;

	let moveCanvas; //set true when user moves over canvas on mobile

	let canvas;
	let redoFunction;
	let encourageLandscape;
	const sketch = (p5) => {
		let image;

		p5.preload = () => {
			image = p5.loadImage(backgroundImage);
		};

		let canvasWidth;
		let canvasHeight;
		p5.setup = () => {
			if (image.width > image.height && mobile) {
				encourageLandscape = true;
			}
			//Handle width of canvas based on
			canvasHeight = image.height / (image.width / p5.windowWidth);
			canvasWidth = image.width / (image.height / p5.windowHeight);

			if (p5.windowWidth >= 500) {
				if (p5.windowHeight <= 500) {
					canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
				} else if (canvasHeight < p5.windowHeight) {
					canvas = p5.createCanvas(canvasWidth, p5.windowHeight);
				} else {
					canvas = p5.createCanvas(p5.windowWidth, canvasHeight);
				}
			} /*else if (p5.windowWidth < 500 && image.width < image.height) {
				canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
			} */ else if (p5.windowWidth < 500) {
				canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
			}
			p5.background(image);

			let container = document.getElementById('canvas-container');

			/*
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
			*/

			redoFunction = () => {
				p5.clear();
				p5.background(image);
			};
		};
		if (mobile) {
			window.onresize = p5.resizeCanvas();
		}
		let x = 0,
			y = 0,
			px = 0,
			py = 0,
			easing = 0.3;
		p5.mousePressed = () => {
			if (finishedDrawing || moveCanvas || pallette || overButton || drawInstructions) {
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
			if (finishedDrawing || moveCanvas || pallette || overButton || drawInstructions) {
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
			console.log('resize detected');
			canvasHeight = image.height / (image.width / p5.windowWidth);
			canvasWidth = image.width / (image.height / p5.windowHeight);
			if (p5.windowWidth >= 500 && p5.windowHeight > 500) {
				if (p5.height <= p5.windowHeight && p5.windowWidth < p5.width) {
					p5.resizeCanvas(canvasWidth, p5.windowHeight);
				} else {
					p5.resizeCanvas(p5.windowWidth, canvasHeight);
				}
			} else if (p5.windowHeight < 500) {
				if (canvasHeight < p5.windowHeight) {
					canvas = p5.resize(p5.windowWidth, p5.windowHeight);
				} else {
					canvas = p5.resize(p5.windowWidth, p5.windowHeight);
				}
			} else if (p5.windowWidth < 500) {
				p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
			}
			p5.background(image);
		};
	};

	//set color

	//set stroke width and highlight chosen width with white background
	let strokeButtons = document.getElementsByClassName('stroke-button');
	const setStrokeWidth = (e) => {
		if (e.target.id === 'tiny-stroke') {
			strokeWidth = 5;
		} else if (e.target.id === 'small-stroke') {
			strokeWidth = 10;
		} else if (e.target.id === 'medium-stroke') {
			strokeWidth = 20;
		} else if (e.target.id === 'big-stroke') {
			strokeWidth = 30;
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
	let painterName;

	let notEnoughInfo;
	let uploads = JSON.parse(localStorage.getItem('cloudUploads'));
	const uploadArray = ['none'];
	localStorage.setItem('cloudUploads', JSON.stringify(uploadArray));

	let allowUpload = true;
	const submitImage = () => {
		if (
			(canvasTitle && canvasTitle.length > 50) ||
			(canvasLocation && canvasLocation.length > 30) ||
			(painterName && painterName.length > 30)
		) {
			return;
		}
		if (canvasTitle && allowUpload) {
			uploads = JSON.parse(localStorage.getItem('cloudUploads'));
			uploads.push('upload');
			localStorage.setItem('cloudUploads', JSON.stringify(uploads));
			allowUpload = false;
			notEnoughInfo = false;
			let formData = new FormData();
			formData.append('title', canvasTitle);
			formData.append('location', canvasLocation);
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
		let title;
		if (canvasTitle) {
			title = canvasTitle.split(' ').join('-');
		} else {
			title = 'myCloudCity';
		}
		link.download = `${title}.png`;
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

	let disableClick = false;

	const handleExitButton = () => {
		if (!disableClick) {
			if (pallette) {
				pallette = false;
			}
			if (finishedDrawing) {
				finishedDrawing = false;
			}
			overButton = false;
		}
	};

	let tinyButtonBorder;
	let smallButtonBorder;
	let mediumButtonBorder;
	let bigButtonBorder;
	const openPallette = () => {
		pallette = !pallette;
		if (strokeWidth === 5) {
			tinyButtonBorder = 'solid 4px #00D1FF';
			smallButtonBorder = 'none';
			mediumButtonBorder = 'none';
			bigButtonBorder = 'none';
		} else if (strokeWidth === 10) {
			smallButtonBorder = 'solid 4px #00D1FF';
			mediumButtonBorder = 'none';
			bigButtonBorder = 'none';
			tinyButtonBorder = 'none';
		} else if (strokeWidth === 20) {
			smallButtonBorder = 'none';
			mediumButtonBorder = 'solid 4px #00D1FF';
			bigButtonBorder = 'none';
			tinyButtonBorder = 'none';
		} else {
			smallButtonBorder = 'none';
			mediumButtonBorder = 'none';
			tinyButtonBorder = 'none';
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

	const goToAbout = () => {
		window.open('https://cloudcities.studiotomassaraceno.org', '_self');
	};

	const openTerms = () => {
		window.open('https://cloudcities.studiotomassaraceno.org/terms/', '_blank').focus();
	};
</script>

<div id="canvas-container">
	{#if encourageLandscape}
		<div id="landscapemodal">
			<div id="center">
				<h2>
					For this image we encourge putting your phone in landscape mode. Please turn your phone
					90° and press continue.
				</h2>
				<button
					on:click={() => (encourageLandscape = false)}
					on:touchstart={() => (encourageLandscape = false)}>Continue</button
				>
			</div>
		</div>
	{/if}
	<P5 {sketch} />
	<h2 id="title">Cloud Cities</h2>
	<div class="icon-button about-button" on:click={goToAbout} />
	<div
		class="icon-button repo-button"
		on:mouseenter={mouseEnterButton}
		on:mouseleave={mouseLeaveButton}
		on:touchstart={redirectMobile}
		on:click={redirectMobile}
	/>
	{#if pallette}
		<div class="container" id="pallette-container" on:click={handleExitButton}>
			<div
				class="modal-info draw-settings"
				id="pallette"
				on:mouseenter={() => (disableClick = !disableClick)}
				on:mouseleave={() => (disableClick = !disableClick)}
			>
				<div class="style-section">
					<p>size</p>
					<div class="stroke-width">
						<div
							class="stroke-button"
							id="tiny-stroke"
							on:click={setStrokeWidth}
							style="border: {tinyButtonBorder}"
						/>
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
				<button
					id="pallette-done"
					on:click={handleExitButton}
					on:touchstart={handleExitButton}
					on:mouseenter={() => (disableClick = !disableClick)}
					on:mouseleave={() => (disableClick = !disableClick)}>Done</button
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
			<div class="modal-info submit-image">
				<h2>Contribute to the Cloud Cities repository</h2>
				<div class="input-section">
					<p>{contributeText[0]}</p>
					<input
						type="text"
						id="input-title"
						data-lpignore="true"
						maxlength="50"
						bind:value={painterName}
					/>
				</div>
				<div class="input-section">
					<p>{contributeText[1]}</p>
					<input
						type="text"
						id="input-location"
						data-lpignore="true"
						maxlength="30"
						bind:value={canvasLocation}
					/>
				</div>
				<div class="input-section">
					<p>{contributeText[2]}</p>
					<input
						type="text"
						id="input-name"
						data-lpignore="true"
						maxlength="30"
						bind:value={canvasTitle}
					/>
				</div>
				<p>
					{tandcText}<span style="text-decoration: underline; cursor: pointer" on:click={openTerms}
						><p>{tandcAelemText}</p></span
					>
				</p>
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
			<!--
				<div
				class="icon-button exit-button"
				on:click={handleExitButton}
				on:touchstart={handleExitButton}
			/>
			-->
		</div>
	{/if}
	{#if imageSubmitted}
		<div class="container">
			<div class="modal-info">
				<h2>Thank you! Submission complete</h2>
				<p>Your drawing will be reviewed shortly and subsequently published onto Cloud Cities.</p>
				<div class="flex-row">
					<button on:click={returnToDraw} on:touchstart={returnToDraw}>Return to drawing</button>
					<button on:click={redirectMobile} on:touchstart={redirectMobile}
						>Visit the repository</button
					>
				</div>
			</div>
		</div>
	{/if}

	{#if !pallette && !finishedDrawing}
		<div
			class="icon-button finished-drawing-button"
			id="finish-button"
			on:click={() => (finishedDrawing = !finishedDrawing)}
			on:touchstart={() => (finishedDrawing = !finishedDrawing)}
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
			on:click={redoFunction}
			on:touchstart={redoFunction}
		/>
	{/if}
</div>

<style>
	#canvas-container {
		width: 100vw;
		height: 100vh;
	}
	.container {
		background: rgba(0, 0, 0, 0.75);
		position: fixed;
		top: 0px;
		z-index: 1000;
		width: 100%;
		height: 100%;
		color: white;
	}

	#title {
		position: fixed;
		top: 0px;
		left: 50%;
		transform: translate(-50%);
		color: white;
		font-weight: 400;
		font-size: 32px;
		line-height: 38px;
		/*text-shadow: 0px 0px 3px #ffffff;*/
		margin: 0px;
		top: 8px;
	}

	.repo-button {
		top: 0px;
		left: 0px;
		background-image: url('/button_repository.png');
		position: fixed;
		z-index: 10000;
	}
	.repo-button:hover {
		background-image: url('/button_repository_hover.png');
	}
	.draw-settings {
		width: 300px;
		padding: 10px;
	}

	.stroke-color {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
	}
	.stroke-width {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
	}

	.stroke-button {
		border-radius: 50%;
		background-color: white;
		cursor: pointer;
		color: transparent;
	}

	#big-stroke {
		width: 40px;
		height: 40px;
	}
	#medium-stroke {
		width: 20px;
		height: 20px;
	}
	#small-stroke {
		width: 10px;
		height: 10px;
	}
	#tiny-stroke {
		width: 5px;
		height: 5px;
	}

	.finished-drawing-button {
		bottom: 0px;
		right: 0px;
		background-image: url('/button_finish.png');
		position: fixed;
	}

	.redo-button {
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		background-image: url('/button_reset.png');
		position: fixed;
	}

	.pallette-button {
		bottom: 0px;
		left: 0px;
		background-image: url('/button_pallette.png');
		position: fixed;
	}

	.about-button {
		top: 0px;
		right: 0px;
		background-image: url('/icon_info.png');
		position: fixed;
	}

	.about-button:hover {
		background-image: url('/icon_info_hover.png');
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

	.style-section > p {
		font-size: 20px;
	}

	.exit-button {
		bottom: 0px;
		left: 0px;
		background-image: url('/button_close.png');
	}
	.exit-button:hover {
		background-image: url('/button_close_hover.png');
	}

	.input-section p {
		width: 40%;
		word-wrap: break-word;
	}
	input {
		background-color: rgb(0, 0, 0, 0.24);
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
		height: 48px;
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

	img {
		margin-left: 5px;
	}

	#pallette-done {
		width: 100%;
	}

	#landscapemodal {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(0deg, #ffffff 0%, #0094ff 100%);
		color: white;
	}
	#landscapemodal > #center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100000;
		text-align: center;
	}

	@media (max-width: 500px) {
		.modal-info {
			width: 80vw;
		}

		.input-section > p,
		.modal-info > p {
			font-size: 13px;
		}

		#title {
			font-size: 18px;
			line-height: 20px;
		}
	}
	@media (max-height: 500px) {
		.modal-info {
			width: 80%;
		}
		#landscapemodal > #center {
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
			text-align: center;
		}

		.input-section > p,
		.modal-info > p {
			font-size: 13px;
		}

		#title {
			font-size: 18px;
			line-height: 20px;
		}
	}
</style>
