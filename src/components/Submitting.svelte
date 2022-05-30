<div class="container">
	<div id="submit-line">
		<h2 id="submitting">Submitting</h2>
		<h2 class="dot dot-1">.</h2>
		<h2 class="dot dot-2">.</h2>
		<h2 class="dot dot-3">.</h2>
	</div>
</div>

<style>
	.container {
		background: rgba(0, 0, 0, 0.75);
		position: fixed;
		top: 0px;
		z-index: 1000;
		width: 100%;
		height: 100%;
		color: white;
	}

	#submit-line {
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
	}
	.dot {
		position: relative;
		bottom: 0px;
		margin-left: 3px;
		animation: jump 1s infinite;
	}
	.dot-1 {
		-webkit-animation-delay: 100ms;
		animation-delay: 100ms;
	}

	.dot-2 {
		-webkit-animation-delay: 200ms;
		animation-delay: 200ms;
	}

	.dot-3 {
		-webkit-animation-delay: 300ms;
		animation-delay: 300ms;
	}

	@keyframes jump {
		0% {
			bottom: 0px;
		}
		20% {
			bottom: 5px;
		}
		40% {
			bottom: 0px;
		}
	}
</style>
