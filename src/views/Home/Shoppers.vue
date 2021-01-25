<template>
  <div class="Shoppers">
    <van-nav-bar title="The Shoppers" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: "Shoppers",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Shoppers {
  height: 100vh;
  background: #fff;
}
</style>