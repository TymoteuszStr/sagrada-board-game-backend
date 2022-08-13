import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";

const cookiesOptions = { expire: "8h" };

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies, cookiesOptions)
  .mount("#app");
