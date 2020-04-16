<template>
  <div class="landing">
    <div class="jumbotron">
      
      <h1 class="display-4">Welcome</h1>
      <p class="lead">
        ReShop service is available to all customers worldwide.
      </p>
      <hr class="my-4" />

      <div>
        <a class="btn   btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped>
.jumbotron {
  height: 350px;
  margin: auto;
  text-align: center;
background-image: url('~@/assets/wallpaper.jpg');
background-repeat: no-repeat;
 background-attachment: scroll;
padding-left: 50px;

}

.btn {
  width: 140px;
  display: flex;
  align-items: center;
  margin: auto;
  background-color: rgba(14, 158, 50);
  color: white;
  margin-top: ;
}

h1 {
  font-size: 6rem;
  margin-left: 380px;
  font-weight: 500;
  text-shadow: 2px 2px green;
  color: rgba(23, 44, 23, 0.555);
}

p {
  margin-left: 420px;
  font-weight: 400;
}
</style>
