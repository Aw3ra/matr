import { c as create_ssr_component } from "../../chunks/index.js";
import "aos";
const app = "";
const aos = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${slots.default ? slots.default({}) : ``}</main>

<footer class="flex justify-center my-16 relative"></footer>`;
});
export {
  Layout as default
};
