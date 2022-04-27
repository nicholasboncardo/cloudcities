<script>
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const enterCloudcities = () => {
        console.log("enter cloud cities")
        dispatch("enterCloudcities")
    }

</script>

<div class="start-container" transition:fade="{{duration: 1000}}">  

    <div class="modal-center start-info">
            <h2 class="start-headline">Welcome to Cloud Cities</h2>
            <p>A growing repository of cloud-based knowledges, activated by an interactive tool for pareidolic ecologies.
You are invited to draw upon the ocean of air and interpret a cloud’s multitudinal relations. A mise-en-Aeroscène: images of cloud formations are selected from the project’s growing repository, as collected by the artist Tomás Saraceno and your own willing contribution.</p>
            <button class="enter-button" on:click={enterCloudcities}>Enter</button>
    </div>
</div>


<style>
    .start-container {
        background: rgba(0, 0, 0, 0.44);
        position: fixed;
        top:0px;
        z-index: 1000;
        width: 100%;
        height: 100%;
        color: white;
    }

   

    .start-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;  
        position: absolute;
        padding: 20px;
        width: 60%;
    }

    button {
        width: 100%;
        height: 30px;
    }
    @media (max-width: 500px) {
      .start-info {
          width: 80%;
      }
    }

</style>