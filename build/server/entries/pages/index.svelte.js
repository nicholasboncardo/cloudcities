import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as welcomeTitle, b as welcomeToCloudCities, r as repoImages } from "../../chunks/wpTitles-a72a14dd.js";
const css$2 = {
  code: ".gallery.svelte-uyqkr9.svelte-uyqkr9{overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-uyqkr9.svelte-uyqkr9{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-uyqkr9.svelte-uyqkr9{width:100%;position:relative;max-height:60vh}.gallery-item.svelte-uyqkr9 .image.svelte-uyqkr9{display:grid;width:100%;height:100%;overflow:hidden;min-height:20vh}.gallery-item.svelte-uyqkr9 .image img.svelte-uyqkr9{width:100%;height:100%;object-fit:fill}.img-info.svelte-uyqkr9.svelte-uyqkr9{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-uyqkr9 p.svelte-uyqkr9{margin:3px}.info-text.svelte-uyqkr9.svelte-uyqkr9{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-uyqkr9>h2.svelte-uyqkr9{margin-top:5px}.info-text.svelte-uyqkr9>p.svelte-uyqkr9{margin:0px;font-size:small}.desc-text.svelte-uyqkr9.svelte-uyqkr9{font-size:20px}img.svelte-uyqkr9.svelte-uyqkr9:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 1000px){.gallery.svelte-uyqkr9.svelte-uyqkr9{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 700px){.gallery.svelte-uyqkr9.svelte-uyqkr9{grid-template-columns:1fr 1fr}}@media(max-width: 500px){.gallery.svelte-uyqkr9.svelte-uyqkr9{grid-template-columns:1fr}}",
  map: null
};
const Gallery2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { repoImages: repoImages2 } = $$props;
  let { remix } = $$props;
  console.log("remix: ", remix);
  let columns;
  if ($$props.repoImages === void 0 && $$bindings.repoImages && repoImages2 !== void 0)
    $$bindings.repoImages(repoImages2);
  if ($$props.remix === void 0 && $$bindings.remix && remix !== void 0)
    $$bindings.remix(remix);
  $$result.css.add(css$2);
  return `<div class="${"gallery svelte-uyqkr9"}" id="${"gallery"}"><div class="${"flex-container svelte-uyqkr9"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % columns == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-uyqkr9"}"><div class="${"image svelte-uyqkr9"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-uyqkr9"}"></div>
						${`<div class="${"img-info svelte-uyqkr9"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-uyqkr9"}"><p class="${"svelte-uyqkr9"}">${escape(image.date)}</p>
									<p class="${"svelte-uyqkr9"}">${escape(image.location)}</p>
									<h2 class="${"desc-text svelte-uyqkr9"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	${``}
	${``}
	${``}
</div>`;
});
var overlay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".overlay.svelte-5r6x5d{color:white;width:100%;position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;z-index:1000}.overlay-button.svelte-5r6x5d{margin:10px;width:30px;height:30px;background-size:30px;background-repeat:no-repeat;background-position:center center}.draw.svelte-5r6x5d{background-image:url('/draw-unselected.png')}.draw.svelte-5r6x5d:hover{cursor:pointer;background-image:url('/draw-hover.png')}.close.svelte-5r6x5d{position:relative;width:30px;height:30px;background-size:30px;background-image:url('/button_close.png');cursor:pointer}.about.svelte-5r6x5d{background-image:url('/burger-default.png');cursor:pointer}.about.svelte-5r6x5d:hover{background-image:url('/burger-hover.png')}h2.svelte-5r6x5d{font-style:normal;font-weight:400;font-size:32px;line-height:38px;text-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);margin:0px}",
  map: null
};
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { openComponent } = $$props;
  let { image } = $$props;
  if ($$props.openComponent === void 0 && $$bindings.openComponent && openComponent !== void 0)
    $$bindings.openComponent(openComponent);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$1);
  return `<div class="${"overlay svelte-5r6x5d"}">${openComponent === "gallery" ? `<a href="${"/draw"}"><div class="${"overlay-button draw svelte-5r6x5d"}"></div></a>
		<h2 class="${"svelte-5r6x5d"}">Cloud Cities</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-5r6x5d"}"></div></a>` : ``}
	${openComponent === "individualPost" ? `<div class="${"overlay-button close svelte-5r6x5d"}"></div>
		<h2 class="${"svelte-5r6x5d"}">${escape(image.title)}</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-5r6x5d"}"></div></a>` : ``}
</div>`;
});
var start_svelte_svelte_type_style_lang = "";
const css = {
  code: ".start-container.svelte-1407kxg{background:rgba(0, 0, 0, 0.44);position:fixed;top:0px;z-index:1000;width:100%;height:100%;color:white}.start-info.svelte-1407kxg{display:flex;flex-direction:column;justify-content:space-around;position:absolute;padding:20px;width:60%}button.svelte-1407kxg{width:100%;height:30px}@media(max-width: 500px){.start-info.svelte-1407kxg{width:80%}}",
  map: null
};
const Start = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { modalText } = $$props;
  let { title } = $$props;
  console.log("title in onmount: ", typeof title);
  if ($$props.modalText === void 0 && $$bindings.modalText && modalText !== void 0)
    $$bindings.modalText(modalText);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  {
    if (modalText.length > 0)
      ;
  }
  return `<div class="${"start-container svelte-1407kxg"}"><div class="${"modal-center start-info svelte-1407kxg"}"><h2 id="${"title"}" class="${"start-headline"}">${escape(title)}</h2>
		<div id="${"text"}"></div>
		<button id="${"enter-button"}" class="${"svelte-1407kxg"}">Enter</button></div>
</div>`;
});
var IndividualPost_svelte_svelte_type_style_lang = "";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $welcomeTitle, $$unsubscribe_welcomeTitle;
  let $welcomeToCloudCities, $$unsubscribe_welcomeToCloudCities;
  let $repoImages, $$unsubscribe_repoImages;
  $$unsubscribe_welcomeTitle = subscribe(welcomeTitle, (value) => $welcomeTitle = value);
  $$unsubscribe_welcomeToCloudCities = subscribe(welcomeToCloudCities, (value) => $welcomeToCloudCities = value);
  $$unsubscribe_repoImages = subscribe(repoImages, (value) => $repoImages = value);
  console.log("title: ", $welcomeTitle);
  let component = "gallery";
  let chosenImage;
  $$unsubscribe_welcomeTitle();
  $$unsubscribe_welcomeToCloudCities();
  $$unsubscribe_repoImages();
  return `${$welcomeToCloudCities.length > 0 ? `${validate_component(Start, "Start").$$render($$result, {
    title: $welcomeTitle,
    modalText: $welcomeToCloudCities
  }, {}, {})}` : `${validate_component(Overlay, "Overlay").$$render($$result, {
    openComponent: component,
    image: chosenImage
  }, {}, {})}`}

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages, remix: false }, {}, {})}

${``}`;
});
export { Routes as default };
