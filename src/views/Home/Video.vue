<template>
  <div class="Video">
    <van-nav-bar
      :title="$t('Video.title')"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "Video",
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
.Video {
  .wrapper {
    height: 100vh;
    background: #fff;
  }
}
</style>