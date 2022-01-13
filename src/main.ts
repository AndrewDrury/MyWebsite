import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import "@/assets/variableOveride.scss";
import "@/assets/main.scss";
import VueScrollTo from "vue-scrollto";
import VueScrollProgress from "vue-scroll-progress";
// const VueScrollProgress = require("vue-scroll-progress");
import VueParticles from "vue-particles";

Vue.use(VueParticles);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.use(VueScrollProgress);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
