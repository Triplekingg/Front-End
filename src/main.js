import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSession from "vue-session/index.esm";
import "./plugins/vue-axios";

Vue.config.productionTip = false;

new Vue({
  router,
  VueSession,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
