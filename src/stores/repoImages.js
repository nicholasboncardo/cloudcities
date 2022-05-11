import { writable } from 'svelte/store';

export const repoImages = writable([]);
let count = 20;
export const getImages = async (count) => {
	const res = await fetch(
		`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=44&per_page=${count}`
	);
	const data = await res.json();
	const dataForRepo = data.map((data) => {
		let newDate = new Date(data.date);
		return {
			date: Intl.DateTimeFormat('de-DE').format(newDate),
			link: data['source_url'],
			title: data.title.rendered,
			description: data.description.rendered.includes('<p>')
				? data.description.rendered.split('<p>').pop().split('</p>')[0]
				: false,
			location: data.caption.rendered.split('<p>').pop().split('</p>')[0]
		};
	});
	repoImages.set(dataForRepo);
};
getImages(count);
