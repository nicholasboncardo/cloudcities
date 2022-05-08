import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as welcomeToCloudCities, r as repoImages } from "../../chunks/wpTexts-52e51617.js";
const css$1 = {
  code: ".gallery.svelte-1uzmczl.svelte-1uzmczl{overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-1uzmczl.svelte-1uzmczl{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-1uzmczl.svelte-1uzmczl{width:100%;position:relative;max-height:60vh}.gallery-item.svelte-1uzmczl .image.svelte-1uzmczl{display:grid;width:100%;height:100%;overflow:hidden;min-height:20vh}.gallery-item.svelte-1uzmczl .image img.svelte-1uzmczl{width:100%;height:100%;object-fit:fill}.img-info.svelte-1uzmczl.svelte-1uzmczl{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-1uzmczl p.svelte-1uzmczl{margin:3px}.info-text.svelte-1uzmczl.svelte-1uzmczl{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-1uzmczl>h2.svelte-1uzmczl{margin-top:5px}.info-text.svelte-1uzmczl>p.svelte-1uzmczl{margin:0px;font-size:small}.desc-text.svelte-1uzmczl.svelte-1uzmczl{font-size:20px}img.svelte-1uzmczl.svelte-1uzmczl:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 560px){.gallery.svelte-1uzmczl.svelte-1uzmczl{grid-template-columns:none}}",
  map: null
};
const Gallery2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { repoImages: repoImages2 } = $$props;
  let { remix } = $$props;
  console.log("remix: ", remix);
  if ($$props.repoImages === void 0 && $$bindings.repoImages && repoImages2 !== void 0)
    $$bindings.repoImages(repoImages2);
  if ($$props.remix === void 0 && $$bindings.remix && remix !== void 0)
    $$bindings.remix(remix);
  $$result.css.add(css$1);
  return `<div class="${"gallery svelte-1uzmczl"}" id="${"gallery"}"><div class="${"flex-container svelte-1uzmczl"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1uzmczl"}"><div class="${"image svelte-1uzmczl"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1uzmczl"}"></div>
						${`<div class="${"img-info svelte-1uzmczl"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1uzmczl"}"><p class="${"svelte-1uzmczl"}">${escape(image.date)}</p>
									<p class="${"svelte-1uzmczl"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-1uzmczl"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-1uzmczl"}" id="${"flex-container2"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 1 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1uzmczl"}"><div class="${"image svelte-1uzmczl"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1uzmczl"}"></div>
						${`<div class="${"img-info svelte-1uzmczl"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1uzmczl"}"><p class="${"svelte-1uzmczl"}">${escape(image.date)}</p>
									<p class="${"svelte-1uzmczl"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-1uzmczl"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-1uzmczl"}" id="${"flex-container3"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 2 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1uzmczl"}"><div class="${"image svelte-1uzmczl"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1uzmczl"}"></div>
						${`<div class="${"img-info svelte-1uzmczl"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1uzmczl"}"><p class="${"svelte-1uzmczl"}">${escape(image.date)}</p>
									<p class="${"svelte-1uzmczl"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-1uzmczl"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	<div class="${"flex-container svelte-1uzmczl"}" id="${"flex-container4"}">${each(repoImages2, (image, i) => {
    return `${i % 4 == 3 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1uzmczl"}"><div class="${"image svelte-1uzmczl"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1uzmczl"}"></div>
						${`<div class="${"img-info svelte-1uzmczl"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1uzmczl"}"><p class="${"svelte-1uzmczl"}">${escape(image.date)}</p>
									<p class="${"svelte-1uzmczl"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-1uzmczl"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
</div>`;
});
var overlay_svelte_svelte_type_style_lang = "";
var start_svelte_svelte_type_style_lang = "";
const css = {
  code: ".start-container.svelte-1407kxg{background:rgba(0, 0, 0, 0.44);position:fixed;top:0px;z-index:1000;width:100%;height:100%;color:white}.start-info.svelte-1407kxg{display:flex;flex-direction:column;justify-content:space-around;position:absolute;padding:20px;width:60%}button.svelte-1407kxg{width:100%;height:30px}@media(max-width: 500px){.start-info.svelte-1407kxg{width:80%}}",
  map: null
};
const Start = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { modalText } = $$props;
  if ($$props.modalText === void 0 && $$bindings.modalText && modalText !== void 0)
    $$bindings.modalText(modalText);
  $$result.css.add(css);
  {
    if (modalText.length > 0)
      ;
  }
  return `<div class="${"start-container svelte-1407kxg"}"><div class="${"modal-center start-info svelte-1407kxg"}"><h2 class="${"start-headline"}">Welcome to Cloud Cities</h2>
		<div id="${"text"}"></div>
		<button id="${"enter-button"}" class="${"svelte-1407kxg"}">Enter</button></div>
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

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages, remix: false }, {}, {})}

${``}`;
});
export { Routes as default };
