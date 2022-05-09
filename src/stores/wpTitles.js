import { writable } from 'svelte/store';

export const welcomeTitle = writable();
export const drawStartTitle = writable([]);

const getTitle = async (modal, writable) => {
	let res = await fetch(
		`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${modal}`
	);
	let resJson = await res.json();
	let title = resJson[0].title.rendered;
	writable.set(title);
};

getTitle(1, welcomeTitle);
getTitle(2, drawStartTitle);
