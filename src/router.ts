import { createMemoryHistory, createRouter } from "vue-router";
import IntroView from "./views/Intro.vue";
import HSLView from "./views/HSL.vue";
import RGBView from "./views/RGB.vue";
import HexView from "./views/Hex.vue";
import ConversionsView from "./views/Conversions.vue";

const routes = [
	{ path: "/", component: IntroView, name: "intro" },
	{ path: "/hsl", component: HSLView, name: "hsl" },
	{ path: "/rgb", component: RGBView, name: "rgb" },
	{ path: "/hex", component: HexView, name: "hex" },
	{ path: "/conversions", component: ConversionsView, name: "conversions" },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
