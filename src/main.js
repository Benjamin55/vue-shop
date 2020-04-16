import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import "popper.js";
import "bootstrap";
import "./assets/app.scss";

import * as firebase from "firebase";



import VueFirestore from "vue-firestore";
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Landing", require("./components/Landing.vue").default);
Vue.component("Products", require("./components/Products.vue").default);
Vue.component("Admin", require("./components/Admin.vue").default);
Vue.component("Login", require("./components/Login.vue").default);
Vue.component("System", require("./components/System.vue").default);
Vue.component("Register", require("./components/Register.vue").default);

Vue.component("Hero", require("./components/Hero.vue").default);




Vue.use(VueFirestore, {
  key: "id",
  enumerable: true
});

Vue.use(VueFirestore);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;





const firebaseConfig = {
    apiKey: "AIzaSyBK26XkNGvMTlkc3DpeOA4pnm71Qw5FZfs",
    authDomain: "vue-shop-8ba4b.firebaseapp.com",
    databaseURL: "https://vue-shop-8ba4b.firebaseio.com",
    projectId: "vue-shop-8ba4b",
    storageBucket: "vue-shop-8ba4b.appspot.com",
    messagingSenderId: "968204491538",
    appId: "1:968204491538:web:038e9d53427f2382daf1cb",
    measurementId: "G-RG62VXH6M4"
  };
  
  firebase.initializeApp(firebaseConfig);




new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");




