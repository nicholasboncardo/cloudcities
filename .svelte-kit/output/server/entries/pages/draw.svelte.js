import { c as create_ssr_component, a as subscribe } from "../../chunks/index-fc226c31.js";
import { d as drawInstruction, c as cloudsToBe, r as repoImages } from "../../chunks/wpTexts-52e51617.js";
var Testp5_svelte_svelte_type_style_lang = "";
var StartDrawModal_svelte_svelte_type_style_lang = "";
const Draw_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_drawInstruction;
  let $$unsubscribe_cloudsToBe;
  let $$unsubscribe_repoImages;
  $$unsubscribe_drawInstruction = subscribe(drawInstruction, (value) => value);
  $$unsubscribe_cloudsToBe = subscribe(cloudsToBe, (value) => value);
  $$unsubscribe_repoImages = subscribe(repoImages, (value) => value);
  $$unsubscribe_drawInstruction();
  $$unsubscribe_cloudsToBe();
  $$unsubscribe_repoImages();
  return `${``}

${``}

${``}`;
});
export { Draw_1 as default };
