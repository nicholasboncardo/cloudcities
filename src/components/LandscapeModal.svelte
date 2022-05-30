<script>
import {createEventDispatcher} from 'svelte'; 
const dispatch = createEventDispatcher();

const handleLandscape = () => {
     dispatch("closeLandscape")
}
</script>


<div id="landscapemodal">
	<div class="modal-info">
		<p>We recommend rotating your device into landscape mode before you begin.</p>
		<button
			on:click={handleLandscape}
			on:touchstart={handleLandscape}>I’ve rotated my device</button
		>
	</div>
</div>

<style>
	#landscapemodal {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(0deg, #ffffff 0%, #0094ff 100%);
		color: white;
		z-index: 10;
	}
	#landscapemodal > .modal-info {
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(26px);
	}
	#landscapemodal > .modal-info > p {
		margin: 0px;
		text-align: center;
	}
	#landscapemodal > .modal-info > button {
		width: 100%;
	}
</style>
