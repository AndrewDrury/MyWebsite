import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import "@/assets/variableOveride.scss";
import "@/assets/main.scss";
import VueScrollTo from "vue-scrollto";

Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
