/<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Welcome</h1>
      <p class="lead">
        The ReShop service is available to all customers who would like to
        purchase their product online.
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
  height: 300px;
  margin: auto;
  text-align: center;
}

.btn {
  width: 140px;
  display: flex;
  align-items: center;
  margin: auto;
  background-color: rgba(14, 158, 50);
  color: white;
}
</style>
