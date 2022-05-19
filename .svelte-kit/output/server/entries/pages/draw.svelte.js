import { c as create_ssr_component, a as subscribe } from "../../chunks/index-fc226c31.js";
import { c as cloudsToBe, d as drawStartTitle, a as drawInstruction, b as contributeModal, r as repoImages } from "../../chunks/wpTitles-70103c61.js";
var Testp5_svelte_svelte_type_style_lang = "";
var DrawInstructions_svelte_svelte_type_style_lang = "";
var StartDrawModal_svelte_svelte_type_style_lang = "";
const Draw_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cloudsToBe;
  let $$unsubscribe_drawStartTitle;
  let $$unsubscribe_drawInstruction;
  let $$unsubscribe_contributeModal;
  let $$unsubscribe_repoImages;
  $$unsubscribe_cloudsToBe = subscribe(cloudsToBe, (value) => value);
  $$unsubscribe_drawStartTitle = subscribe(drawStartTitle, (value) => value);
  $$unsubscribe_drawInstruction = subscribe(drawInstruction, (value) => value);
  $$unsubscribe_contributeModal = subscribe(contributeModal, (value) => value);
  $$unsubscribe_repoImages = subscribe(repoImages, (value) => value);
  $$unsubscribe_cloudsToBe();
  $$unsubscribe_drawStartTitle();
  $$unsubscribe_drawInstruction();
  $$unsubscribe_contributeModal();
  $$unsubscribe_repoImages();
  return `${``}

${``}

${``}

${``}`;
});
export { Draw_1 as default };
