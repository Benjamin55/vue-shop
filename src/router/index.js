import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Admin from "@/components/Admin.vue";
import About from "@/views/About.vue";
import Overview from "@/views/Overview.vue";
import Products from "@/views/Products.vue";
import Orders from "@/views/Orders.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

Vue.use(VueRouter);



 export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
        {
          path: "/register",
          name: "register",
          component: Register
        },
        {
          path: "/login",
          name: "login",
          component: Login
        },
      
    
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path:"overview",
          name: "overview",
          component: Overview
        },
        {
          path:"products",
          name: "products",
          component: Products
        },
        {
          path:"orders",
          name: "orders",
          component: Orders
        }
      ]
    },
  
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});


