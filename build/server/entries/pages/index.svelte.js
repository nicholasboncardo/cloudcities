import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as welcomeToCloudCities, r as repoImages, e as welcomeTitle } from "../../chunks/wpTitles-ab11aa86.js";
const css$2 = {
  code: ".gallery.svelte-icgujv.svelte-icgujv{background:linear-gradient(0deg, #ffffff 0%, #0094ff 100%);overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-icgujv.svelte-icgujv{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-icgujv.svelte-icgujv{width:100%;position:relative;cursor:pointer}.gallery-item.svelte-icgujv .image.svelte-icgujv{display:grid;width:100%;overflow:hidden}.gallery-item.svelte-icgujv .image img.svelte-icgujv{width:100%;object-fit:fill}.img-info.svelte-icgujv.svelte-icgujv{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.info-text.svelte-icgujv.svelte-icgujv{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-icgujv>h2.svelte-icgujv{margin-top:5px;display:flex;text-align:left;line-height:unset}p.svelte-icgujv.svelte-icgujv{margin:0px;font-size:unset;line-height:unset}.desc-text.svelte-icgujv.svelte-icgujv{margin-top:5px;font-size:20px}img.svelte-icgujv.svelte-icgujv:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 1500px){.gallery.svelte-icgujv.svelte-icgujv{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 700px){.gallery.svelte-icgujv.svelte-icgujv{grid-template-columns:1fr 1fr}}@media(max-width: 500px){.gallery.svelte-icgujv.svelte-icgujv{grid-template-columns:1fr}}",
  map: null
};
const Gallery2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { repoImages: repoImages2 } = $$props;
  let { remix } = $$props;
  let columns;
  if ($$props.repoImages === void 0 && $$bindings.repoImages && repoImages2 !== void 0)
    $$bindings.repoImages(repoImages2);
  if ($$props.remix === void 0 && $$bindings.remix && remix !== void 0)
    $$bindings.remix(remix);
  $$result.css.add(css$2);
  return `<div class="${"gallery svelte-icgujv"}" id="${"gallery"}"><div class="${"flex-container svelte-icgujv"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % columns == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-icgujv"}"><div class="${"image svelte-icgujv"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-icgujv"}"></div>
						${`<div class="${"img-info svelte-icgujv"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-icgujv"}"><p class="${"svelte-icgujv"}">${escape(image.date)}</p>
									${image.location !== "undefined" ? `<p class="${"svelte-icgujv"}">${escape(image.location)}</p>` : ``}
									<h2 class="${"desc-text svelte-icgujv"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	${``}
	${``}
	${``}
</div>`;
});
const css$1 = {
  code: ".overlay.svelte-18zfup0{color:white;width:100%;position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;z-index:1000}.icon-button.svelte-18zfup0{position:initial}h2.svelte-18zfup0{font-style:normal;font-weight:400;font-size:32px;line-height:38px;margin:0px;max-width:60vw;word-wrap:break-word;position:absolute;left:50%;transform:translateX(-50%);top:16px}#remix.svelte-18zfup0{position:absolute;top:10px;left:50%;transform:translateX(-50%)}@media(max-width: 500px){h2.svelte-18zfup0{font-style:normal;font-weight:400;font-size:18px;line-height:20px;text-align:center;letter-spacing:0.05em;top:10px}}@media(max-height: 500px){h2.svelte-18zfup0{font-style:normal;font-weight:400;font-size:18px;line-height:20px;text-align:center;letter-spacing:0.05em;top:10px}}",
  map: null
};
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { openComponent } = $$props;
  let { image } = $$props;
  let drawButtonSrc = "draw-unselected.png";
  let aboutButtonSrc = "icon_info.png";
  let closeButtonSrc = "button_close.png";
  if ($$props.openComponent === void 0 && $$bindings.openComponent && openComponent !== void 0)
    $$bindings.openComponent(openComponent);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$1);
  return `<div class="${"overlay svelte-18zfup0"}">${openComponent === "gallery" ? `<a href="${"/draw"}"><img${add_attribute("src", drawButtonSrc, 0)} alt="${"draw-button"}" class="${"icon-button svelte-18zfup0"}"></a>
		<h2 class="${"svelte-18zfup0"}">Cloud Cities</h2>
		<a href="${"https://cloudcities.studiotomassaraceno.org"}"><img${add_attribute("src", aboutButtonSrc, 0)} alt="${"about-button"}" class="${"icon-button svelte-18zfup0"}"></a>` : ``}
	${openComponent === "individualPost" ? `<img class="${"icon-button svelte-18zfup0"}" alt="${"exit-button"}"${add_attribute("src", closeButtonSrc, 0)}>
		<h2 class="${"svelte-18zfup0"}">${escape(image.title)}</h2>
		<a href="${"https://cloudcities.studiotomassaraceno.org"}"><img${add_attribute("src", aboutButtonSrc, 0)} alt="${"about-button"}" class="${"icon-button svelte-18zfup0"}"></a>` : ``}
	${openComponent === "remix" ? `<h2 id="${"remix"}" class="${"svelte-18zfup0"}">Select a drawing to re/interpret</h2>` : ``}
</div>`;
});
var Start_svelte_svelte_type_style_lang = "";
var IndividualPost_svelte_svelte_type_style_lang = "";
var Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-xrvvla.svelte-xrvvla{position:fixed;top:0px;width:100%;height:100%;background:linear-gradient(0deg, #ffffff 0%, #0094ff 100%);color:white}.loading.svelte-xrvvla>h2.svelte-xrvvla{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loading svelte-xrvvla"}"><h2 class="${"svelte-xrvvla"}">Loading...</h2>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component;
  let $welcomeToCloudCities, $$unsubscribe_welcomeToCloudCities;
  let $repoImages, $$unsubscribe_repoImages;
  let $welcomeTitle, $$unsubscribe_welcomeTitle;
  $$unsubscribe_welcomeToCloudCities = subscribe(welcomeToCloudCities, (value) => $welcomeToCloudCities = value);
  $$unsubscribe_repoImages = subscribe(repoImages, (value) => $repoImages = value);
  $$unsubscribe_welcomeTitle = subscribe(welcomeTitle, (value) => $welcomeTitle = value);
  let chosenImage;
  component = "gallery";
  $$unsubscribe_welcomeToCloudCities();
  $$unsubscribe_repoImages();
  $$unsubscribe_welcomeTitle();
  return `${!$welcomeToCloudCities || $repoImages.length <= 8 || !$welcomeTitle || $welcomeTitle === "undefined" ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${`${validate_component(Overlay, "Overlay").$$render($$result, {
    openComponent: component,
    image: chosenImage
  }, {}, {})}`}

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages, remix: false }, {}, {})}

${``}`;
});
export { Routes as default };
