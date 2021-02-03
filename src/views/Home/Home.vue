
<template>
  <div class="Home">
    <main class="content">
      <div id="content-container" class="container">
        <div class="row">
          <div class="col-md-3">
            <Aside />
          </div>

          <div class="col-md-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Aside from "@com/Aside.vue";
export default {
  name: "Home",
  components: {
    Aside
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss">
.content {
  width: 100%;
  overflow: auto;
  padding: 15px;
  padding-top: 20px;
  min-height: calc(100vh - 75px);
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 50px;
  }
}
</style>
