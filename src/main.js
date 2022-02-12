import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
require("@/plugins/axios");

import IdleVue from "idle-vue";
import router from "@/router";

Vue.config.productionTip = false;

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 720000,
}); // sets up the idle time,i.e. time left to logout the user on no activity

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
