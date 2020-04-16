/<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">ReShop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link" href="#"
              >About</router-link
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a class="btn btn-success my-2 my-sm-0" data-toggle="modal" data-target="#login" type="submit">
            Get Start
          </a>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {
  
  }
};
</script>

<style scoped>
.background {
  background-color: grey;
  width: 100px;
  height: 100px;
}
</style>
