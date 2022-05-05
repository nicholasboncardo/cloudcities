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
const welcomeToCloudCities = writable([]);
const cloudsToBe = writable([]);
const drawInstruction = writable([]);
const submitModal = writable([]);
const getModal = async (modal, writable2) => {
  let innerArray = [];
  let res = await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${modal}`);
  let resJson = await res.json();
  let content = JSON.parse(resJson[0].grid);
  console.log("content: ", content.cont);
  content.cont.forEach((element) => {
    console.log("element: ", element.cont);
    innerArray.push(element.cont);
  });
  writable2.set(innerArray);
  console.log("innnerarray: ", innerArray);
};
getModal(1, welcomeToCloudCities);
getModal(2, cloudsToBe);
getModal(3, drawInstruction);
getModal(4, submitModal);
export { welcomeToCloudCities as a, cloudsToBe as c, drawInstruction as d, writable as w };
