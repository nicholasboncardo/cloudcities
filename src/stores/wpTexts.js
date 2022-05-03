import { writable } from 'svelte/store';

export const welcomeToCloudCities = writable([]);
export const cloudsToBe = writable([]);
export const drawInstruction = writable([]);
export const submitModal = writable([]);

const getModal = async (modal, writable) => {
    let innerArray = [];
	let res = await fetch(
		`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${modal}`
	);
	let resJson = await res.json();
	let content = JSON.parse(resJson[0].grid);
	let centerHTML = new DOMParser().parseFromString(content.cont[0].cont, 'text/html');
	let centerText = centerHTML.getElementsByTagName('p');
	for (let i = 0; i < centerText.length; i++) {
		innerArray.push(centerText[i].innerHTML);
		console.log('centerText[i].innerHTML, ', centerText[i].innerHTML);
	}
	writable.set(innerArray);
};
getModal(1, welcomeToCloudCities);
getModal(2, cloudsToBe);
getModal(3, drawInstruction);
getModal(4, submitModal);



