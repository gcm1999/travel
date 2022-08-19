import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import fastClick from "fastclick";

// import SwiperClass /* swiper modules... */ from "swiper";
// import VueAwesomeSwiper from "vue-awesome-swiper";

// import swiper module styles
// import "swiper/css";
// more module style...

// use swiper modules
// SwiperClass.use([
//   /* swiper modules... */
// ]);

import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import "./assets/styles/iconfont.css";

fastClick.attach(document.body);

createApp(App).use(router).mount("#app");
