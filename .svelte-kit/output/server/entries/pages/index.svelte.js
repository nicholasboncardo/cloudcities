import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as writable, a as welcomeToCloudCities } from "../../chunks/wpTexts-245d7894.js";
const repoImages = writable([]);
let count = 20;
const getImages = async (count2) => {
  const res = await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=44&per_page=${count2}`);
  const data = await res.json();
  const dataForRepo = data.map((data2) => {
    let newDate = new Date(data2.date);
    return {
      date: Intl.DateTimeFormat("de-DE").format(newDate),
      link: data2["source_url"],
      title: data2.title.rendered,
      description: data2.description.rendered.includes("<p>") ? data2.description.rendered.split("<p>").pop().split("</p>")[0] : false,
      location: data2.caption.rendered.split("<p>").pop().split("</p>")[0]
    };
  });
  repoImages.set(dataForRepo);
};
getImages(count);
var Gallery2_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".gallery.svelte-12o0y98.svelte-12o0y98{overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-12o0y98.svelte-12o0y98{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-12o0y98.svelte-12o0y98{width:100%;position:relative;max-height:60vh}.gallery-item.svelte-12o0y98 .image.svelte-12o0y98{display:grid;width:100%;height:100%;overflow:hidden;min-height:20vh}.gallery-item.svelte-12o0y98 .image img.svelte-12o0y98{width:100%;height:100%;object-fit:fill}.img-info.svelte-12o0y98.svelte-12o0y98{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-12o0y98 p.svelte-12o0y98{margin:3px}.info-text.svelte-12o0y98.svelte-12o0y98{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-12o0y98>h2.svelte-12o0y98{margin-top:5px}.info-text.svelte-12o0y98>p.svelte-12o0y98{margin:0px;font-size:small}.desc-text.svelte-12o0y98.svelte-12o0y98{font-size:20px}img.svelte-12o0y98.svelte-12o0y98:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 560px){.gallery.svelte-12o0y98.svelte-12o0y98{grid-template-columns:none}}",
  map: null
};
const Gallery2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { repoImages: repoImages2 } = $$props;
  if ($$props.repoImages === void 0 && $$bindings.repoImages && repoImages2 !== void 0)
    $$bindings.repoImages(repoImages2);
  $$result.css.add(css$1);
  return `<div class="${"gallery svelte-12o0y98"}" id="${"gallery"}"><div class="${"flex-container svelte-12o0y98"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-12o0y98"}"><div class="${"image svelte-12o0y98"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-12o0y98"}"></div>
						${`<div class="${"img-info svelte-12o0y98"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-12o0y98"}"><p class="${"svelte-12o0y98"}">${escape(image.date)}</p>
									<p class="${"svelte-12o0y98"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-12o0y98"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-12o0y98"}" id="${"flex-container2"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 1 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-12o0y98"}"><div class="${"image svelte-12o0y98"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-12o0y98"}"></div>
						${`<div class="${"img-info svelte-12o0y98"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-12o0y98"}"><p class="${"svelte-12o0y98"}">${escape(image.date)}</p>
									<p class="${"svelte-12o0y98"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-12o0y98"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-12o0y98"}" id="${"flex-container3"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 2 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-12o0y98"}"><div class="${"image svelte-12o0y98"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-12o0y98"}"></div>
						${`<div class="${"img-info svelte-12o0y98"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-12o0y98"}"><p class="${"svelte-12o0y98"}">${escape(image.date)}</p>
									<p class="${"svelte-12o0y98"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-12o0y98"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-12o0y98"}" id="${"flex-container4"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 3 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-12o0y98"}"><div class="${"image svelte-12o0y98"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-12o0y98"}"></div>
						${`<div class="${"img-info svelte-12o0y98"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-12o0y98"}"><p class="${"svelte-12o0y98"}">${escape(image.date)}</p>
									<p class="${"svelte-12o0y98"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-12o0y98"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
</div>`;
});
var overlay_svelte_svelte_type_style_lang = "";
var start_svelte_svelte_type_style_lang = "";
const css = {
  code: ".start-container.svelte-l1ic82{background:rgba(0, 0, 0, 0.44);position:fixed;top:0px;z-index:1000;width:100%;height:100%;color:white}.start-info.svelte-l1ic82{display:flex;flex-direction:column;justify-content:space-around;position:absolute;padding:20px;width:60%}button.svelte-l1ic82{width:100%;height:30px}@media(max-width: 500px){.start-info.svelte-l1ic82{width:80%}}",
  map: null
};
const Start = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { modalText } = $$props;
  if ($$props.modalText === void 0 && $$bindings.modalText && modalText !== void 0)
    $$bindings.modalText(modalText);
  $$result.css.add(css);
  return `<div class="${"start-container svelte-l1ic82"}"><div class="${"modal-center start-info svelte-l1ic82"}"><h2 class="${"start-headline"}">Welcome to Cloud Cities</h2>
		
		<div id="${"text"}"></div>
		<button class="${"enter-button svelte-l1ic82"}">Enter</button></div>
</div>`;
});
var IndividualPost_svelte_svelte_type_style_lang = "";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $welcomeToCloudCities, $$unsubscribe_welcomeToCloudCities;
  let $repoImages, $$unsubscribe_repoImages;
  $$unsubscribe_welcomeToCloudCities = subscribe(welcomeToCloudCities, (value) => $welcomeToCloudCities = value);
  $$unsubscribe_repoImages = subscribe(repoImages, (value) => $repoImages = value);
  $$unsubscribe_welcomeToCloudCities();
  $$unsubscribe_repoImages();
  return `${`${validate_component(Start, "Start").$$render($$result, { modalText: $welcomeToCloudCities }, {}, {})}`}

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages }, {}, {})}

${``}`;
});
export { Routes as default };
