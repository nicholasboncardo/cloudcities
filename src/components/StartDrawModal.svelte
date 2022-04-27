<script>
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let propValue;

    let chooseUpload = false;
    let imageUrl;
    const chooseImage = () => {
        chooseUpload = true;
    }

    const getInputImage = () => {
        const uploadInput = document.getElementById("upload");
        const imageFile = uploadInput.files[0];
        imageUrl = URL.createObjectURL(imageFile);
        console.log("chooseImage: ", imageUrl)
    }

    const drawOnUploadImage = () => {
        console.log("draw on up image: ", imageUrl)
        dispatch("startDrawing", imageUrl)
    }

    const drawOnThisImage = () => {
        let choseBgImage = false; 
        dispatch("startDrawing", choseBgImage)
    }
</script>

<div class="start-draw-container" transition:fade style="background-image: url({propValue})">  
    <div class="start-draw-center">
            <h2>Clouds to be...</h2>
            <p>You are invited to draw upon the ocean of air and interpret its many possible relations. An image of cloud formation – a mise-en-Aeroscène – has been selected at random from the project’s growing repository. However, should the sky above you already be lucid with stories, upload your own image and begin interpreting what appears closest. </p>
            <div class="button-section">
                <button class="enter-button" on:click={drawOnThisImage}>Draw on this Canvas</button>
                <button class="enter-button" on:click={chooseImage}>Upload your own Canvas</button>
            </div>
            {#if chooseUpload}
                <input accept=".png, .jpg, .jpeg" type="file" id="upload" on:change={getInputImage}>
                <button on:click={drawOnUploadImage}>Start</button>
            {/if}
    </div>
</div>


<style>
    .start-draw-container {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.24);
        color: white;
    }

    .start-draw-center {
        position: absolute;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(26px);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        gap: 10px;
        text-align: center;
    }

    .button-section {
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%
    }
    .button-section button {
        height: 100%;
        width: 49%
    }

    h2 {
        margin: 0px;
        text-shadow: 0px 0px 3px #FFFFFF;
    }

    @media (max-width: 500px) { 
    .start-draw-center {
        width: 80%;
    }    
    }
</style>