import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
Vue.use(Router);

export default new Router({
  // mode: "history", //If commented out, use hash mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ],
  
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1));
      if (element) {
        return window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    }
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
