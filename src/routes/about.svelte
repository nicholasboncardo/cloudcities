<div class="container">
	<div class="header">
		<h2>Cloud Cities</h2>
	</div>
	<div class="button-section">
		<div class="top-buttons">
            <a href="/draw">
                <button>Draw</button>
            </a>
            <a href="/">
                <button>Repository</button>
            </a>
        </div>
		<div class="middle-buttons">
            <button class="big-button">
               <h2>Barcelona</h2> 
            </button>
            <button class="big-button">
                <h2>Allborg</h2>
            </button>
            <button>Cloud Cities Reader</button>
            <button>About the project</button>
            <button>Studio Thomas Saraceno</button>
            <button>Acknowledgements</button>
        </div>
		<div class="bottom-buttons">
            <button>T&C</button>
            <button>Privacy Policy</button>
        </div>
	</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(180deg, #ffffff 0%, #0094ff 100%);
		display: grid;
		grid-template-rows: 1fr 9fr;

	}
	.header {
		text-align: center;
		color: #0094ff;
		grid-row: 1;
        place-self: center;
	}
	.button-section {
		grid-row: 2;
		width: 98%;
		height: 95%;
        place-self: center;
		display: flex;
        flex-direction: column;
        gap: 1%;

	}
	.button-section .top-buttons {
        flex-grow: 1;
        display: flex;
        width: 100%;
        gap: 1%;
	}
    .button-section .top-buttons a {
        position: relative;
        flex-grow: 1;
		height: 100%;
    }
	.button-section .top-buttons a button {
        background-color: #0094FF;
        position: absolute;
        width: 100%;
        height: 100%
		
	}

    .big-button h2 {
        text-shadow: 0px 0px 10px #0094FF;
        font-weight: 400;
        font-size: 300%;
        margin: 0px;
    }
    .middle-buttons {
        display: flex;
        flex-direction: column;
        gap: 1%;
        flex-grow: 9;
    }

    .middle-buttons button {
        flex-grow: 1;
    }

    .middle-buttons .big-button {
        flex-grow: 2;
    }

    .bottom-buttons {
        display: flex;
        flex-grow: 1;
        gap: 1%;
        align-items: center;
        justify-content: space-between;
    }

    .bottom-buttons button {
        flex-grow: 1;
		height: 100%;
    }

</style>
