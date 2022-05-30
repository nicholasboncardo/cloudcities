import { n as noop, b as safe_not_equal } from "./index-fc226c31.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
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
      name: data2.alt_text,
      description: data2.description.rendered.includes("<p>") ? data2.description.rendered.split("<p>").pop().split("</p>")[0] : false,
      location: data2.caption.rendered.split("<p>").pop().split("</p>")[0]
    };
  });
  repoImages.set(dataForRepo);
};
getImages(count);
var Gallery2_svelte_svelte_type_style_lang = "";
var Overlay_svelte_svelte_type_style_lang = "";
const welcomeToCloudCities = writable([]);
const cloudsToBe = writable([]);
const drawInstruction = writable([]);
const submitModal = writable([]);
const contributeModal = writable([]);
const getModal = async (modal, writable2) => {
  let innerArray = [];
  let res = await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${modal}`);
  let resJson = await res.json();
  let content = JSON.parse(resJson[0].grid);
  content.cont.forEach((element) => {
    innerArray.push(element.cont);
  });
  writable2.set(innerArray);
};
getModal(1, welcomeToCloudCities);
getModal(2, cloudsToBe);
getModal(3, drawInstruction);
getModal(4, submitModal);
getModal(5, contributeModal);
const welcomeTitle = writable();
const drawStartTitle = writable([]);
const getTitle = async (modal, writable2) => {
  let res = await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${modal}`);
  let resJson = await res.json();
  let title = resJson[0].title.rendered;
  writable2.set(title);
};
getTitle(1, welcomeTitle);
getTitle(2, drawStartTitle);
export { drawInstruction as a, contributeModal as b, cloudsToBe as c, drawStartTitle as d, welcomeTitle as e, repoImages as r, welcomeToCloudCities as w };
