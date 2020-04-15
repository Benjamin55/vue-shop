/<template>
  <div class="bod">
    <h1>Our Products</h1>
    <div class="products">
      <div class="product-one ">
        <img width="300px" :key="img" v-for="img in images" v-bind:src="img" />
        <p>This is something about the product</p>
        <button class="btn btn-large btn-success">Add to cart</button>
      </div>
      <div class="product-two">
        <img width="300px" :key="img" v-for="img in images" v-bind:src="img" />
        <p>This is something about the product</p>
        <button class="btn btn-large btn-success">Add to cart</button>
      </div>
      <div class="product-three ">
        <img width="300px" :key="img" v-for="img in images" v-bind:src="img" />
        <p>This is something about the product</p>
        <button class="btn btn-large btn-success">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      images: [
        "https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-10%2F4d767750-f665-11e9-bdfd-d3445a489fa0&client=a1acac3e1b3290917d92&signature=39d1b66ce723d493df7dd413af6fa776431ba3cd"
      ]
    };
  }
};
</script>

<style scoped>
.products {
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 100px;
}
p {
  margin-top: 30px;
}
.btn {
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 30px;
}

h1 {
  font-size: 64px;
  text-align: center;
  margin-top: 50px;
  color: #5edb24;
  text-shadow: 2px 5px #474444;
}
</style>
