import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSession from "vue-session/index.esm";
import "./plugins/vue-axios";
import VueAspectRatio from "vue-aspect-ratio";

Vue.config.productionTip = false;

new Vue({
  router,
  VueSession,
  VueAspectRatio,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
