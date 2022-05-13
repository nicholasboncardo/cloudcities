import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-fc226c31.js";
import { w as welcomeTitle, e as welcomeToCloudCities, r as repoImages } from "../../chunks/wpTitles-f89afeed.js";
const css$2 = {
  code: ".gallery.svelte-1k5ys8a.svelte-1k5ys8a{background:linear-gradient(0deg, #ffffff 0%, #0094ff 100%);overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-1k5ys8a.svelte-1k5ys8a{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-1k5ys8a.svelte-1k5ys8a{width:100%;position:relative;cursor:pointer}.gallery-item.svelte-1k5ys8a .image.svelte-1k5ys8a{display:grid;width:100%;overflow:hidden}.gallery-item.svelte-1k5ys8a .image img.svelte-1k5ys8a{width:100%;object-fit:fill}.img-info.svelte-1k5ys8a.svelte-1k5ys8a{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-1k5ys8a p.svelte-1k5ys8a{margin:3px}.info-text.svelte-1k5ys8a.svelte-1k5ys8a{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-1k5ys8a>h2.svelte-1k5ys8a{margin-top:5px;display:flex}.info-text.svelte-1k5ys8a>p.svelte-1k5ys8a{margin:0px;font-size:small}.desc-text.svelte-1k5ys8a.svelte-1k5ys8a{font-size:20px}img.svelte-1k5ys8a.svelte-1k5ys8a:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 1500px){.gallery.svelte-1k5ys8a.svelte-1k5ys8a{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 700px){.gallery.svelte-1k5ys8a.svelte-1k5ys8a{grid-template-columns:1fr 1fr}}@media(max-width: 500px){.gallery.svelte-1k5ys8a.svelte-1k5ys8a{grid-template-columns:1fr}}",
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
  return `<div class="${"gallery svelte-1k5ys8a"}" id="${"gallery"}"><div class="${"flex-container svelte-1k5ys8a"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % columns == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-1k5ys8a"}"><div class="${"image svelte-1k5ys8a"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-1k5ys8a"}"></div>
						${`<div class="${"img-info svelte-1k5ys8a"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-1k5ys8a"}"><p class="${"svelte-1k5ys8a"}">${escape(image.date)}</p>
									${image.location !== "undefined" ? `<p class="${"svelte-1k5ys8a"}">${escape(image.location)}</p>` : ``}
									<h2 class="${"desc-text svelte-1k5ys8a"}">${escape(image.title)}</h2></div>
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
  code: ".overlay.svelte-s3r582{color:white;width:100%;position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;z-index:1000}.overlay-button.svelte-s3r582{margin:10px;width:48px;height:48px;background-size:48px;background-repeat:no-repeat;background-position:center center}.draw.svelte-s3r582{background-image:url('/draw-unselected.png')}.draw.svelte-s3r582:hover{cursor:pointer;background-image:url('/draw-hover.png')}.close.svelte-s3r582{position:relative;width:30px;height:30px;background-size:30px;background-image:url('/button_close.png');cursor:pointer}.about.svelte-s3r582{background-image:url('/icon_info.png');cursor:pointer}.about.svelte-s3r582:hover{background-image:url('/icon_info_hover.png')}h2.svelte-s3r582{font-style:normal;font-weight:400;font-size:32px;line-height:38px;text-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);margin:0px}",
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
  return `<div class="${"overlay svelte-s3r582"}">${openComponent === "gallery" ? `<a href="${"/draw"}"><div class="${"overlay-button draw svelte-s3r582"}"></div></a>
		<h2 class="${"svelte-s3r582"}">Cloud Cities</h2>
		<div class="${"overlay-button about svelte-s3r582"}"></div>` : ``}
	${openComponent === "individualPost" ? `<div class="${"overlay-button close svelte-s3r582"}"></div>
		<h2 class="${"svelte-s3r582"}">${escape(image.title)}</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-s3r582"}"></div></a>` : ``}
</div>`;
});
var start_svelte_svelte_type_style_lang = "";
var IndividualPost_svelte_svelte_type_style_lang = "";
var Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-1akkeh1.svelte-1akkeh1{position:fixed;top:0px;width:100vw;height:100vh;background:linear-gradient(0deg, #ffffff 0%, #0094ff 100%);color:white}.loading.svelte-1akkeh1>h2.svelte-1akkeh1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loading svelte-1akkeh1"}"><h2 class="${"svelte-1akkeh1"}">Loading...</h2>
</div>`;
});
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
  return `${$welcomeToCloudCities || $welcomeToCloudCities.length <= 0 ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${`${validate_component(Overlay, "Overlay").$$render($$result, {
    openComponent: component,
    image: chosenImage
  }, {}, {})}`}

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages, remix: false }, {}, {})}

${``}`;
});
export { Routes as default };
