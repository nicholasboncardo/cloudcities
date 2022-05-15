import { c as create_ssr_component, d as createEventDispatcher, f as each, g as add_attribute, e as escape, v as validate_component, a as subscribe } from "../../chunks/index-fc226c31.js";
import { w as welcomeTitle, e as welcomeToCloudCities, r as repoImages } from "../../chunks/wpTitles-f89afeed.js";
const css$2 = {
  code: ".gallery.svelte-7uu6bt.svelte-7uu6bt{background:linear-gradient(0deg, #ffffff 0%, #0094ff 100%);overflow-x:hidden;-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100vw;height:100vh;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.flex-container.svelte-7uu6bt.svelte-7uu6bt{display:flex;flex-direction:column;gap:0px}.gallery-item.svelte-7uu6bt.svelte-7uu6bt{width:100%;position:relative;cursor:pointer}.gallery-item.svelte-7uu6bt .image.svelte-7uu6bt{display:grid;width:100%;overflow:hidden}.gallery-item.svelte-7uu6bt .image img.svelte-7uu6bt{width:100%;object-fit:fill}.img-info.svelte-7uu6bt.svelte-7uu6bt{position:absolute;left:0px;top:0px;width:100%;height:100%;align-items:flex-start;text-align:start;background-color:rgb(0, 0, 0, 0.24);color:white}.img-info.svelte-7uu6bt p.svelte-7uu6bt{margin:3px}.info-text.svelte-7uu6bt.svelte-7uu6bt{position:absolute;bottom:0px;margin-left:10px}.info-text.svelte-7uu6bt>h2.svelte-7uu6bt{margin-top:5px;display:flex;text-align:left}.info-text.svelte-7uu6bt>p.svelte-7uu6bt{margin:0px;font-size:small}.desc-text.svelte-7uu6bt.svelte-7uu6bt{font-size:20px}img.svelte-7uu6bt.svelte-7uu6bt:hover{transform:scale(1.2);-ms-transform:scale(1.2);-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-o-transform:scale(1.2)}@media(max-width: 1500px){.gallery.svelte-7uu6bt.svelte-7uu6bt{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 700px){.gallery.svelte-7uu6bt.svelte-7uu6bt{grid-template-columns:1fr 1fr}}@media(max-width: 500px){.gallery.svelte-7uu6bt.svelte-7uu6bt{grid-template-columns:1fr}}",
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
  return `<div class="${"gallery svelte-7uu6bt"}" id="${"gallery"}"><div class="${"flex-container svelte-7uu6bt"}" id="${"flex-container1"}">${each(repoImages2, (image, i) => {
    return `${i % columns == 0 ? `<div class="${"gallery-container"}"><div class="${"gallery-item svelte-7uu6bt"}"><div class="${"image svelte-7uu6bt"}"><img${add_attribute("src", image.link, 0)} alt="${""}" class="${"svelte-7uu6bt"}"></div>
						${`<div class="${"img-info svelte-7uu6bt"}" style="${"visibility: hidden"}"><div class="${"info-text svelte-7uu6bt"}"><p class="${"svelte-7uu6bt"}">${escape(image.date)}</p>
									${image.location !== "undefined" ? `<p class="${"svelte-7uu6bt"}">${escape(image.location)}</p>` : ``}
									<h2 class="${"desc-text svelte-7uu6bt"}">${escape(image.title)}</h2></div>
							</div>`}</div>
				</div>` : ``}`;
  })}</div>
	${``}
	${``}
	${``}
</div>`;
});
const DrawButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"48"}" height="${"48"}" viewBox="${"0 0 48 48"}" fill="${"none"}"><g filter="${"url(#filter0_b_91_1041)"}"><path d="${"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"}" fill="${"black"}" fill-opacity="${"0.25"}"></path><g filter="${"url(#filter1_d_91_1041)"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M15.3054 34.3098L20.6325 31.9019H20.6322C20.7349 31.8565 20.8279 31.7923 20.9062 31.7126L33.9263 18.7919C34.9204 17.8583 35.3346 16.1548 34.3343 15.1704L31.7152 12.5838L31.7149 12.5841C31.2079 12.1007 30.4907 11.8996 29.8031 12.0478C29.1373 12.1759 28.5276 12.5043 28.0568 12.9876L15.0373 25.8708C14.9585 25.9525 14.8939 26.0463 14.8461 26.1486L10.9906 34.4324C10.9117 34.6105 10.8906 34.8052 10.9251 34.991C10.9146 35.0441 10.9091 35.0988 10.9091 35.1549C10.9091 35.6215 11.2912 36 11.7622 36H31.4846C31.9556 36 32.3377 35.6215 32.3377 35.1549C32.3377 34.6881 31.9556 34.3098 31.4846 34.3098H15.3054Z"}" fill="${"white"}"></path></g></g><defs><filter id="${"filter0_b_91_1041"}" x="${"-28.3636"}" y="${"-28.3636"}" width="${"104.727"}" height="${"104.727"}" filterUnits="${"userSpaceOnUse"}" color-interpolation-filters="${"sRGB"}"><feFlood flood-opacity="${"0"}" result="${"BackgroundImageFix"}"></feFlood><feGaussianBlur in="${"BackgroundImage"}" stdDeviation="${"14.1818"}"></feGaussianBlur><feComposite in2="${"SourceAlpha"}" operator="${"in"}" result="${"effect1_backgroundBlur_91_1041"}"></feComposite><feBlend mode="${"normal"}" in="${"SourceGraphic"}" in2="${"effect1_backgroundBlur_91_1041"}" result="${"shape"}"></feBlend></filter><filter id="${"filter1_d_91_1041"}" x="${"7.90912"}" y="${"9"}" width="${"30"}" height="${"30"}" filterUnits="${"userSpaceOnUse"}" color-interpolation-filters="${"sRGB"}"><feFlood flood-opacity="${"0"}" result="${"BackgroundImageFix"}"></feFlood><feColorMatrix in="${"SourceAlpha"}" type="${"matrix"}" values="${"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}" result="${"hardAlpha"}"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="${"1.5"}"></feGaussianBlur><feComposite in2="${"hardAlpha"}" operator="${"out"}"></feComposite><feColorMatrix type="${"matrix"}" values="${"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"}"></feColorMatrix><feBlend mode="${"normal"}" in2="${"BackgroundImageFix"}" result="${"effect1_dropShadow_91_1041"}"></feBlend><feBlend mode="${"normal"}" in="${"SourceGraphic"}" in2="${"effect1_dropShadow_91_1041"}" result="${"shape"}"></feBlend></filter></defs></svg>`;
});
var overlay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".overlay.svelte-yg0jt{color:white;width:100%;position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;z-index:1000}.overlay-button.svelte-yg0jt{border:red 1px solid;margin:10px;width:48px;height:48px;background-size:48px;background-repeat:no-repeat;background-position:center center;cursor:pointer}.about.svelte-yg0jt{background-image:url('/icon_info.png');cursor:pointer}.about.svelte-yg0jt:hover{background-image:url('/icon_info_hover.png')}h2.svelte-yg0jt{font-style:normal;font-weight:400;font-size:32px;line-height:38px;text-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);margin:0px;max-width:60vw;word-wrap:break-word}@media(max-width: 500px){.overlay-button.svelte-yg0jt{width:28px;height:28px;margin:5px}h2.svelte-yg0jt{font-family:'Fredoka One';font-style:normal;font-weight:400;font-size:18px;line-height:20px;text-align:center;letter-spacing:0.05em}}",
  map: null
};
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { openComponent } = $$props;
  let { image } = $$props;
  let aboutButtonSrc = "svg/about.svg";
  let closeButtonSrc = "svg/close.svg";
  if ($$props.openComponent === void 0 && $$bindings.openComponent && openComponent !== void 0)
    $$bindings.openComponent(openComponent);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$1);
  return `<div class="${"overlay svelte-yg0jt"}">${openComponent === "gallery" ? `<a href="${"/draw"}">${validate_component(DrawButton, "DrawButton").$$render($$result, {}, {}, {})}</a>
		<h2 class="${"svelte-yg0jt"}">Cloud Cities</h2>
		<img${add_attribute("src", aboutButtonSrc, 0)}${add_attribute("xlink:href", aboutButtonSrc, 0)} alt="${"about-button"}" class="${"overlay-button svelte-yg0jt"}">` : ``}
	${openComponent === "individualPost" ? `<img class="${"overlay-button svelte-yg0jt"}" alt="${"exit-button"}"${add_attribute("src", closeButtonSrc, 0)}${add_attribute("xlink:href", closeButtonSrc, 0)}>
		<h2 class="${"svelte-yg0jt"}">${escape(image.title)}</h2>
		<a href="${"/about"}"><div class="${"overlay-button about svelte-yg0jt"}"></div></a>` : ``}
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
  return `${!$welcomeToCloudCities || $repoImages.length <= 0 ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${`${validate_component(Overlay, "Overlay").$$render($$result, {
    openComponent: component,
    image: chosenImage
  }, {}, {})}`}

${validate_component(Gallery2, "Gallery2").$$render($$result, { repoImages: $repoImages, remix: false }, {}, {})}

${``}`;
});
export { Routes as default };
