<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const returnToDraw = () => {
		dispatch('returnToDraw');
	};
	const returnHome = () => {
		dispatch('returnHome');
	};
</script>

<div class="container">
	<div class="modal-info thank-you">
		<h2>Thank you! Submission complete</h2>
		<p style="text-align: center;">
			Your drawing will be reviewed shortly and subsequently published onto Cloud Cities.
		</p>
		<div class="flex-row">
			<button on:click={returnToDraw} on:touchstart={returnToDraw}>Return to drawing</button>
			<button on:click={returnHome} on:touchstart={returnHome}>Visit the repository</button>
		</div>
	</div>
</div>

<style>
	button {
		width: 49%;
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
	.thank-you {
		min-width: 500px;
	}

	@media (max-width: 500px) {
		.thank-you {
			min-width: unset;
		}
	}
	@media (max-height: 500px) {
		.thank-you {
			min-width: unset;
		}
	}
</style>
