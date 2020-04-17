<template>
  <div class="home">
    <Navbar></Navbar>
    <Landing></Landing>
    <Products></Products>
     <Login></Login>
  </div>
</template>

<script>
import Login from './Login.vue';
import Navbar from './Navbar.vue';
import Landing from './Landing.vue';
import Products from './Products.vue';
export default {
  name: "Home",
  components: {
    Login, Navbar, Landing, Products
  }

};
</script>

<style></style>
