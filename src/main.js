import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import fastClick from "fastclick";

import "./assets/styles/reset.css";
import "./assets/styles/border.css";



fastClick.attach(document.body);

createApp(App).use(router).mount("#app");