<template>
  <div class="Activity">
    <!-- header -->
    <van-nav-bar :title="$t('Activity.title')" left-arrow @click-left="onClickLeft" />


  </div>
</template>

<script>
export default {
  name: "Activity",
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
.Activity {
}
</style>