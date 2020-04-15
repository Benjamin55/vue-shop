import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";

import "popper.js";
import "bootstrap";
import "./assets/app.scss";


window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Landing", require("./components/Landing.vue").default);
Vue.component("Products", require("./components/Products.vue").default);
Vue.component("Admin", require("./components/Admin.vue").default);
Vue.component("About", require("./views/About.vue").default);
Vue.component("Hero", require("./components/Hero.vue").default);
Vue.component("Overview", require("./views/Overview.vue").default);
Vue.component("Products", require("./views/Products.vue").default);


new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount("#app");
