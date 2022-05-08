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
	console.log('content: ', content.cont);
	content.cont.forEach((element) => {
		innerArray.push(element.cont);
	});
	writable.set(innerArray);
	console.log('innnerarray: ', innerArray);
};
getModal(1, welcomeToCloudCities);
getModal(2, cloudsToBe);
getModal(3, drawInstruction);
getModal(4, submitModal);
