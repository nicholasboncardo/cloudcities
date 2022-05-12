import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as welcomeTitle, e as welcomeToCloudCities, r as repoImages } from "../../chunks/wpTitles-f89afeed.js";
const css$2 = {
  code: ".gallery.svelte-1bcr14j.svelte-1bcr14j{overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-1bcr14j.svelte-1bcr14j{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-1bcr14j.svelte-1bcr14j{width:100%;position:relative;max-height:60vh}.gallery-item.svelte-1bcr14j .image.svelte-1bcr14j{display:grid;width:100%;height:100%;overflow:hidden;min-height:20vh}.gallery-item.svelte-1bcr14j .image img.svelte-1bcr14j{width:100%;height:100%;object-fit:fill}.img-info.svelte-1bcr14j.svelte-1bcr14j{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-1bcr14j p.svelte-1bcr14j{margin:3px}.info-text.svelte-1bcr14j.svelte-1bcr14j{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-1bcr14j>h2.svelte-1bcr14j{margin-top:5px;display:flex}.info-text.svelte-1bcr14j>p.svelte-1bcr14j{margin:0px;font-size:small}.desc-text.svelte-1bcr14j.svelte-1bcr14j{font-size:20px}img.svelte-1bcr14j.svelte-1bcr14j:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 1000px){.gallery.svelte-1bcr14j.svelte-1bcr14j{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 700px){.gallery.svelte-1bcr14j.svelte-1bcr14j{grid-template-columns:1fr 1fr}}@media(max-width: 500px){.gallery.svelte-1bcr14j.svelte-1bcr14j{grid-template-columns:1fr}}",
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
  return `<div class="${"gallery svelte-1bcr14j"}" id="${"gallery"}"><div class="${"flex-container svelte-1bcr14j"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % columns == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1bcr14j"}"><div class="${"image svelte-1bcr14j"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1bcr14j"}"></div>
						${`<div class="${"img-info svelte-1bcr14j"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1bcr14j"}"><p class="${"svelte-1bcr14j"}">${escape(image.date)}</p>
									${image.location !== "undefined" ? `<p class="${"svelte-1bcr14j"}">${escape(image.location)}</p>` : ``}
									<h2 class="${"desc-text svelte-1bcr14j"}">${escape(image.title)}</h2></div>
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
  code: ".overlay.svelte-9gxmbk{color:white;width:100%;position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;z-index:1000}.overlay-button.svelte-9gxmbk{margin:10px;width:48px;height:48px;background-size:48px;background-repeat:no-repeat;background-position:center center}.draw.svelte-9gxmbk{background-image:url('/draw-unselected.png')}.draw.svelte-9gxmbk:hover{cursor:pointer;background-image:url('/draw-hover.png')}.close.svelte-9gxmbk{position:relative;width:30px;height:30px;background-size:30px;background-image:url('/button_close.png');cursor:pointer}.about.svelte-9gxmbk{background-image:url('/burger-default.png');cursor:pointer}.about.svelte-9gxmbk:hover{background-image:url('/burger-hover.png')}h2.svelte-9gxmbk{font-style:normal;font-weight:400;font-size:32px;line-height:38px;text-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);margin:0px}",
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
  return `<div class="${"overlay svelte-9gxmbk"}">${openComponent === "gallery" ? `<a href="${"/draw"}"><div class="${"overlay-button draw svelte-9gxmbk"}"></div></a>
		<h2 class="${"svelte-9gxmbk"}">Cloud Cities</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-9gxmbk"}"></div></a>` : ``}
	${openComponent === "individualPost" ? `<div class="${"overlay-button close svelte-9gxmbk"}"></div>
		<h2 class="${"svelte-9gxmbk"}">${escape(image.title)}</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-9gxmbk"}"></div></a>` : ``}
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
